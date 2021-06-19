/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import ToggleButton from './ToggleButton'
import theme from '../theme'
import ReverseButton from './ReverseButton'
import File from './File'
import DangerousButton from './DangerousButton'

const discountTag = { value: 'discount', label: 'Discount' }
const priceTag = { value: 'price', label: 'Price' }

const getStore = (storeProp) => ({
  ...storeProp.data.categoryGridRetrieve,
  products: storeProp.data.categoryGridRetrieve.products
    .filter((product) => product.price.discountText !== null)
    .map((product) => ({
      ...product,
      price: {
        ...product.price,
        basePrice: Number(product.price.basePrice.substring(3)),
        discountedPrice: Number(product.price.discountedPrice.substring(3)),
        discountText: Number(
          product.price.discountText.substring(
            1,
            product.price.discountText.length - 1
          )
        ),
      },
    })),
})

const App = () => {
  // const [categoryId, setCategoryId] = useState(
  //   'a224c9bf-6619-416e-aadd-a1d59e632b79'
  // )
  // const [min, setMin] = useState('0')
  // const [max, setMax] = useState('0')
  const [store, setStore] = useState()
  const [sortTag, setSortTag] = useState()
  const [reverse, setReverse] = useState(false)

  const [products, setProducts] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await fetch(
      'https://web.np.playstation.com/api/graphql/v1//op?operationName=categoryGridRetrieve&variables=%7B%22id%22%3A%22a224c9bf-6619-416e-aadd-a1d59e632b79%22%2C%22pageArgs%22%3A%7B%22size%22%3A24%2C%22offset%22%3A0%7D%2C%22sortBy%22%3A%7B%22name%22%3A%22default%22%2C%22isAscending%22%3Atrue%7D%2C%22filterBy%22%3A%5B%5D%2C%22facetOptions%22%3A%5B%5D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2217f6ef895587b3003ea3c992eb7f1983bc15535ea98b7be92e449f0343930cb0%22%7D%7D',
      {
        headers: {
          accept: 'application/json',
          'accept-language':
            'en-GB,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,ru-RU;q=0.6,ru;q=0.5,en-US;q=0.4,zh-CN;q=0.3,zh;q=0.2',
          'content-type': 'application/json',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          'sec-ch-ua-mobile': '?0',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'x-psn-app-ver':
            '@sie-ppr-web-store/app/0.1.0-20210422212028-1-g5e2883da-5e2883daaf825b6fcbbcba4a140897d3886cc6e1',
          'x-psn-correlation-id': 'd472a229-ad2d-4a06-833d-cae4cf349531',
          'x-psn-request-id': 'a4a5a2b8-c3de-4681-8b78-1d11d41bf6b0',
          'x-psn-store-locale-override': 'en-IE',
        },
        referrer: 'https://store.playstation.com/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
      }
    )
    console.log(data)
  }

  useEffect(() => {
    if (store) {
      console.log({ store })
    }
  }, [store])

  useEffect(() => {
    if (store) {
      if (sortTag) {
        if (sortTag === discountTag.value) {
          setProducts((products) =>
            [...products].sort((a, b) =>
              reverse
                ? a.price.discountText - b.price.discountText
                : b.price.discountText - a.price.discountText
            )
          )
        } else if (sortTag === priceTag.value) {
          setProducts((products) =>
            [...products].sort((a, b) =>
              reverse
                ? a.price.discountedPrice - b.price.discountedPrice
                : b.price.discountedPrice - a.price.discountedPrice
            )
          )
        }
      }
    }
  }, [store, sortTag, reverse])

  // const handleLoad = async (event) => {
  //   event.preventDefault()
  //   setStore()
  // }

  useEffect(() => {
    if (store) {
      setProducts(store.products)
    }
  }, [store])

  return (
    <div
      css={{
        display: 'grid',
        width: '100%',
        height: '100%',
        gridTemplateRows: '100px 1fr',
        // background: 'rgb(249, 249, 249)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'flex-start',
          padding: '0 16px',
          '& > *': {
            marginLeft: 12,
          },
        }}
      >
        {/* <Field
          label="Category ID"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        /> */}
        {/* <Field
          label="Min"
          value={min}
          onChange={(event) => setMin(event.target.value)}
          css={{ gridColumnStart: '0', gridColumnEnd: '3', justifySelf: 'end' }}
        />
        <Field
          label="Max"
          value={max}
          onChange={(event) => setMax(event.target.value)}
          css={{ gridColumnStart: '0', gridColumnEnd: '3', justifySelf: 'end' }}
        /> */}
        {/* <div css={{ gridColumnStart: 'span 3' }} /> */}
        <ToggleButton
          onClick={(event) => {
            event.preventDefault()
            setSortTag(discountTag.value)
          }}
          on={sortTag === discountTag.value}
        >
          {discountTag.label}
        </ToggleButton>
        <ToggleButton
          onClick={(event) => {
            event.preventDefault()
            setSortTag(priceTag.value)
          }}
          on={sortTag === priceTag.value}
        >
          {priceTag.label}
        </ToggleButton>
        <ReverseButton
          onClick={(event) => {
            event.preventDefault()
            setReverse((oldReverse) => !oldReverse)
          }}
          on={reverse}
        />
        <div css={{ flex: 1 }} />
        <DangerousButton
          onClick={(event) => {
            event.preventDefault()
            setStore(null)
            setProducts([])
          }}
          css={{
            justifySelf: 'flex-end',
            marginRight: 12,
          }}
        >
          Clear
        </DangerousButton>
        {/* <input
          css={{ height: 40, width: 'calc(50% - 16px)', margin: '0 8px' }}
          type="submit"
          value="Submit"
        /> */}
      </form>
      <div />
      {products.length ? (
        <div
          css={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {products.map((product, i) => (
            <button
              key={product.id}
              css={{
                boxShadow: theme.shadows.button,
                transition: theme.transitions.main,
                // '&:hover': {
                //   background: theme.palette.whiteHover,
                // },
                margin: 8,
                width: 192,
                minHeight: 304,
                height: 'min-content',
                boxSizing: 'border-box',
                outline: 0,
                borderWidth: 0,
                borderStyle: 'solid',
                background: theme.palette.white,
                padding: 0,
                position: 'relative',
                display: 'grid',
                gridTemplateRows: '192px 20px 25px 1fr',
                alignItems: 'center',
                fontFamily: theme.fonts.googleSans,
                '&:active': {
                  boxShadow: theme.shadows.pressedButton,
                },
                '&:focus': {
                  outline: 0,
                },
              }}
              onClick={() => {
                window.open(
                  `https://store.playstation.com/en-ie/product/${product.id}`,
                  '_blank'
                )
              }}
            >
              <img
                loading="lazy"
                alt={`logo-${i}`}
                src={
                  product.media.find((media) => media.role === 'MASTER').url +
                  '?w=210'
                }
                css={{ width: 192, height: 192 }}
              />
              <div
                css={{
                  textDecoration: 'line-through',
                  textAlign: 'end',
                  paddingRight: 6,
                  paddingTop: 2,
                  color: theme.palette.secondaryText,
                }}
              >
                €{product.price.basePrice}
              </div>
              <div
                css={{
                  fontWeight: 500,
                  fontSize: 20,
                  textAlign: 'end',
                  paddingTop: 1,
                  paddingRight: 6,
                }}
              >
                €{product.price.discountedPrice}
              </div>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '12px',
                  padding: '4px 8px',
                  fontWeight: 700,
                  color: theme.palette.white,
                  background: theme.palette.main,
                  width: 'min-content',
                  margin: '2px 4px',
                  position: 'absolute',
                  top: '194px',
                }}
              >
                -{product.price.discountText}%
              </div>
              <div
                css={{
                  padding: '8px 8px',
                }}
              >
                {product.name}
              </div>
            </button>
          ))}
        </div>
      ) : null}
      {products.length ? null : (
        <File
          onDrop={(files) => {
            const file = files[0]
            const reader = new FileReader()
            reader.onloadend = (event) => {
              const json = atob(event.target.result.substring(29))
              const data = JSON.parse(json)
              setStore(getStore(data))
            }
            reader.readAsDataURL(file)
          }}
        />
      )}
    </div>
  )
}

export default App
