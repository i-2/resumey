## Resumey

[website](https://resumey-stg.herokuapp.com/)
![deploy](https://github.com/i-2/resumey/workflows/Push%20Container%20to%20Heroku/badge.svg
)
![tests](https://github.com/i-2/resumey/workflows/Run%20Backend%20Tests/badge.svg
)

Online resume builder which lets you build your resume for free. 

## Running Locally

```
export DEV=1
export ALLOWED_HOSTS='*'

python manage.py runserver
```

## Building Frontend
```
yarn && yarn builddev
```

## Screenshot
![](assets/resumey.png)
![](assets/wizard.png)

