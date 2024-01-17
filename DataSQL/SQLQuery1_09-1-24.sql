--Ordenes(numero, fecha, total) cuyo precio total sea mayor al precio promedio de los productos

SELECT o.number_order, o.date, o.total
FROM orders AS o
	WHERE o.total > (SELECT AVG(p.sale_price)
						FROM products AS p)