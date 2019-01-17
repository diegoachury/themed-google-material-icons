import download from 'download';

const theme = 'round';
const size = 24;

const iterateNames = async () => {
  const fs = require('fs');
  const file = fs.readFileSync('./icon-names', 'utf-8');
  const result = file.split('\n');

  console.log('Download start, please wait');

  Promise.all(result.map((iconName : string) => {
    const url = `https://material.io/tools/icons/static/icons/${theme}-${iconName}-${size}px.svg`;
    const destination = './icon-files';

    return new Promise((resolve, reject) => {
      download(url, destination).then(() => { resolve(); }).catch(reject);
    })
  })).then(() => {
    console.log('Download complete');
  }).catch((e) => {
    console.log('An error occured', e);
  });
}

iterateNames();