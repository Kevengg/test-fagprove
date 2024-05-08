#!/bin/bash

while true; do
    read -p "Do you want to continue? (Y/N): " choice
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