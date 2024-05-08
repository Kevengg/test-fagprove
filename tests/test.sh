#!/bin/bash


# This script will reset the database and run the tests.
# It will ask for confirmation before resetting the database.

while true; do
echo "This script will reset the database."
    read -p "Are you shure you want to continue? (Y/N): " choice
    case $choice in
        [Yy])
            echo "reseting database and running tests..."
            npx prisma db push --force-reset
            npx prisma db seed
            clear
            ts-node ./tests/tester.ts
            break;;
        [Nn])
            echo "Exiting..."
            exit;;
        *)
            echo "Invalid choice. Please enter Y/y or N/n.";;
    esac
done