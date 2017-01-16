# brains and space weekly
weekly publication

## Developing a post
- Change some of the paths in package.json to match your date.
- Make a new folder for the 'app'.
```
cd bundles
mkdir [date]
```
- Add and edit a config file (if needed) in `./configs/`
- To test without having to use local server (which wasn't autogenerating for me on Windows), run `npm start` which will set up a `webpack-dev-server` that serves the dummy `index.html` from the bundles directory. Make sure you are using  the right src script in there.

## To serve locally (and in production)
- From `bundles`, run `npm run start`, which will build a webpack bundle javascript file. This is the file you want to reference from your post.
- `cd` to root directory and then `bundle exec jekyll serve`

## file structure
New 'posts' are in `/_posts`, and they reference js bundles built by webpack and emitted to `/bundles`.
    
# Todo
- [ ] better workflow
- [ ] reuse components
  - includes most likely setting up codesplitting