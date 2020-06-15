# Possibility Now

URL: https://possibilitynow.org/

Techonologies Used:

* TailwindCSS
* Vuepress

## Development

```
$ npm install
$ npm start
```

## Deployment

Deploys on gitlab. See .gitlab-ci.yml.

New commits into the master branch will be automatically deployed to GitLab Pages by a workflow.

## Update endorsers list

Once a user endorses the declaration by submitting the form, their user data goes to a list in `sendinblue.com`.
Then, we use the sendinblue API to get this endorsers list and display endorsers' names a/o organizations on the website.

To update the endorsers list, navigate to the .vuepress directory by using `cd` commands, e.g.
```
cd site
cd .vuepress
```

In the .vuepress directory there is a file called `get_endorsers.js`. Run the script by typing:
```
node get_endorsers.js
```

Voila! The `contacts.json` file containing the endorsers is updated. 
You can now commit the changes. 