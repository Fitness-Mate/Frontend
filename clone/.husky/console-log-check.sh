if git diff --cached --name-only | xargs grep -i 'console\.log' --with-filename --line-number;
then
    echo -e "\n${red}COMMIT REJECTED!  Please remove console."
    exit 1;
fi
