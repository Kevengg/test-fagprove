# Docker MySQL

This folder contains the initialization script for the new mysql db.

It's important to understand that this script will automatically run **only once** when we haven't run this container (`db`) before. See below for more information on how you can run it manually.

`initdb.sh` does the following:

-   Grants all privileges to `$DB_USER`.
    -   This is done because Prisma requires it to generate migrations due to it creating a shadow database temporarily.

There is no automatic imports of a `.sql.gz` file here. However we've added the same `.gitignore` as the old setup to ensure that you don't accidentally push a database dump to git.

---

Still having issues with generating migrations due to the user missing required permissions? Simply run

```shell
docker compose exec db bash /docker-entrypoint-initdb.d/initdb.sh
```