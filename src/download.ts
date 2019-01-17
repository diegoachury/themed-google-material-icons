import download from 'download';

const baseUrl = 'https://material.io/tools/icons/static/icons';
const theme = 'round';
const size = 24;
const fallbackSize = 18;

const iterateNames = async () => {
  const fs = require('fs');
  const file = fs.readFileSync('./icon-names', 'utf-8');
  const result = file.split('\n');

  console.log('Download start, please wait');

  Promise.all(result.map((iconName : string) => {
    const url = `${baseUrl}/${theme}-${iconName}-${size}px.svg`;
    const destination = './icon-files';

    return new Promise((resolve, reject) => {
      return download(url, destination, { filename: iconName })
        .then(() => { resolve(); })
        .catch((e) => {
          console.warn('Failed to download a specific icon.', e, 'Trying a different size for this');
          return download(`${baseUrl}/${theme}-${iconName}-${fallbackSize}px.svg`)
            .then(() => {
              console.log(`Download with fallback size ${fallbackSize}px was successful`);
              resolve();
            })
            .catch(reject);
        });
    })
  })).then(() => {
    console.log('Download complete');
  }).catch((e) => {
    console.log('An error occured', e);
  });
}

iterateNames();