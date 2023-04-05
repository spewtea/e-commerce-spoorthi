# E-commerce API Documentation

This API allows users to view products and place orders.

## Fetch all products

Returns a list of all products available in the store.

**URL** : `/products`

**Method** : `GET`

**Response Codes** :

-   Success : 200 OK
-   Error : 500 Internal Server Error

**Success Response** :

```json
{
	"success": true,
	"data": [
		{
			"id": "1",
			"name": "Product 1",
			"price": "10.99",
			"description": "This is the first product."
		},
		{
			"id": "2",
			"name": "Product 2",
			"price": "20.99",
			"description": "This is the second product."
		}
	]
}
```

**Error Response** :

```json
{
	"success": false,
	"error": "Internal Server Error"
}
```

## Checkout

Place an order with the selected product(s).

**URL** : `/checkout`

**Method** : `POST`

**Request Body** :

```json
{
	"name": "John Doe",
	"email": "johndoe@example.com",
	"address": "1234 Main St, Anytown USA",
	"products": [
		{
			"id": "1",
			"quantity": "2"
		},
		{
			"id": "2",
			"quantity": "1"
		}
	]
}
```

**Response Codes** :

-   Success : 201 Created
-   Error : 400 Bad Request, 500 Internal Server Error

**Success Response** :

```json
{
	"success": true,
	"data": {
		"orderId": "1",
		"name": "John Doe",
		"email": "johndoe@example.com",
		"address": "1234 Main St, Anytown USA",
		"products": [
			{
				"id": "1",
				"name": "Product 1",
				"price": "10.99",
				"quantity": "2",
				"subtotal": "21.98"
			},
			{
				"id": "2",
				"name": "Product 2",
				"price": "20.99",
				"quantity": "1",
				"subtotal": "20.99"
			}
		],
		"total": "42.97"
	}
}
```

**Error Response** :

```json
{
	"success": false,
	"error": "Invalid request. Please provide a valid name, email, address, and product(s)"
}
```
