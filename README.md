# PS4 Deals

In a nutshell local app with sorting by discounted price.. Because Sony doesn't want you to sort by it for some reason... To run you need first using `curl` get json of data and then `yarn start` application and Drag&Drop json file. It will process it and give you nice full list without pagination of deals.

Hint: you can see an example of curl in `requestExample.sh` file

![Screenshot 2021-06-19 142205](https://user-images.githubusercontent.com/64709398/122640781-ef062400-d109-11eb-9ead-0a43acfe3844.png)
![Screenshot 2021-06-19 142823](https://user-images.githubusercontent.com/64709398/122640937-d0545d00-d10a-11eb-9555-2f28383ed7de.png)

Why not automatically through link? Well I was too burdened with CORS fetch issue to get data through browser.
Feel free to add PR. If it's okay it will merged easily.

## Available Scripts

In the project directory, you can run:

### `yarn start`
