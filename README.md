# alt3bank

To use this, first you're gonna need to create a credentials.txt file (when we've finished we'll move this to sign-in through the Monzo API, but for testing purposes this is just far easier.

Lay out credentials.txt like this, getting required info from [here](https://developers.monzo.com/).

```
user ID
auth key
```

If you're editing and don't fancy accidentally pushing your credentials to GitHub, this will ignore any modifications to your file to stop you commiting it accidentally.
```
git update-index --assume-unchanged credentials.txt
```

**Plans:**

- [X] Interface with API using Monzo API

- [ ] Create Web Interface using express and jinja 

- [ ] Load transactions 

- [ ] Rich icons for transactions

- [ ] Lightbox for more transaction info

- [ ] Use chart.js to plot spending habits
