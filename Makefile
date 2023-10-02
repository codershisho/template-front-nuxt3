db:
	docker-compose build
db-no:
	docker-compose build --no-cache
du:
	docker-compose up -d
due:
	docker-compose up -d
	docker-compose exec -u root node sh
de:
	docker-compose exec -u root node sh
dd:
	docker-compose down