--1 Listar todos los artitas por Discografica, ordenados por el nombre del artista
SELECT a.nombre, d.nombre
FROM artista AS a
	INNER JOIN discografica as d
		ON d.id = a.discografica_id
ORDER BY a.nombre;

--2 Que Discogr�fica NO tiene artistas?
SELECT d.nombre
FROM discografica as d
WHERE d.id NOT IN (SELECT a.discografica_id
					FROM artista AS a);

--3 Listar el numero de canciones por artista en orden descendiente
SELECT a.nombre, COUNT(c.id) AS 'cantidad de canciones'
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
GROUP BY a.nombre;

--4 Que artista grab� el mayor numero de canciones?
SELECT TOP 1 a.nombre, COUNT(c.id) AS 'cantidad de canciones'
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY 'cantidad de canciones' DESC;				

--5 Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?
SELECT a.nombre AS artista, al.nombre AS album, COUNT(c.id) AS 'canciones con mas de 5 minutos de duracion'
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
WHERE c.duracion < 5
GROUP BY al.artista_id, al.nombre, a.nombre
ORDER BY artista;

--6 En relaci�n con la consulta anterior, muestra tambi�n las canciones y su duraci�n
SELECT a.nombre AS artista, al.nombre AS album, c.nombre AS cancion, c.duracion
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
WHERE c.duracion < 5
ORDER BY artista;

--7 Qu� artistas grabaron canciones mas largas que 5 minutos, y cu�ntas canciones fueron?
SELECT a.nombre AS artista, COUNT(c.id) AS 'canciones con mas de 5 minutos de duracion'
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
WHERE c.duracion > 5
GROUP BY a.nombre
ORDER BY 'canciones con mas de 5 minutos de duracion' DESC;

--8 En que a�o se grabaron la mayor�a de las canciones?
SELECT TOP 1 al.anio AS a�o, COUNT(c.id) as 'cantidad de canciones'
FROM album AS al
	INNER JOIN canciones AS c
		ON c.album_id = al.id
GROUP BY al.anio


--9 Mostrar el ranking de los 5 artistas, album, cancion y a�o con las canciones m�s largas
SELECT TOP 5 a.nombre AS artista, al.nombre AS album, c.nombre AS cancion, c.duracion
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
ORDER BY c.duracion DESC;

--10 Duraci�n total de todas las canciones grabadas por cada artista en orden descendente
SELECT a.nombre AS artista, c.nombre AS cancion, c.duracion
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
ORDER BY c.duracion DESC;


--11 Que artistas y album no tienen canciones de menos de 5 minutos?
SELECT a.nombre AS artista, al.nombre AS album
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
WHERE al.id NOT IN (SELECT al.id
					FROM album AS al
						INNER JOIN canciones AS c
						ON c.album_id = al.id
					GROUP BY al.id
					HAVING MIN(c.duracion) < 5);

--12 Mostrar el top 3 de artistas con el promedio de duraci�n de las canciones, en orden descendente con la canci�n mas larga primero
SELECT TOP 3 a.nombre AS artista, AVG(c.duracion) AS 'promedio de duraci�n de las canciones'
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
	INNER JOIN canciones AS c
		ON c.album_id = al.id
GROUP BY a.nombre
ORDER BY 'promedio de duraci�n de las canciones' DESC;

--13 Qu� artistas no lanzaron un album durante la decada de 1980 y 1990?
SELECT a.nombre AS artista
FROM artista AS a
	INNER JOIN album AS al
		ON al.artista_id = a.id
WHERE al.anio NOT BETWEEN 1980 AND 1990
GROUP BY a.nombre


--14 Duraci�n total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)
SELECT al.nombre AS album, FLOOR(SUM(c.duracion)) AS minutos,FLOOR((ROUND(SUM(c.duracion), 2)-FLOOR(SUM(c.duracion)))*60) AS segundos
FROM album AS al
	INNER JOIN canciones AS c
		ON c.album_id = al.id
GROUP BY al.nombre
HAVING al.nombre LIKE('%Sgt. Pepper%')