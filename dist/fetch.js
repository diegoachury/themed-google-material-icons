"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const download_1 = __importDefault(require("download"));
const fetchDom = () => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default.get('https://material.io/tools/icons/?style=round', { responseType: 'json' })
        .then(console.log)
        .catch(console.warn);
});
const iterateNames = () => __awaiter(this, void 0, void 0, function* () {
    const fs = require('fs');
    const file = fs.readFileSync('./icon-names', 'utf-8');
    const result = file.split('\n');
    console.log('Download start, please wait');
    Promise.all(result.map((iconName) => {
        const url = `https://material.io/tools/icons/static/icons/round-${iconName}-24px.svg`;
        const destination = './icon-files';
        return new Promise((resolve, reject) => {
            download_1.default(url, destination).then(() => { resolve(); }).catch(reject);
        });
    })).then(() => {
        console.log('Download complete');
    });
});
iterateNames();
//# sourceMappingURL=fetch.js.map