const { join } = require('path');
const { BPEVocab } = require('vecxx');

const dataDir = join(__dirname, 'data');
const bpe = new BPEVocab(join(dataDir, 'vocab.30k'), join(dataDir, 'codes.30k'));
const value = bpe.lookup('dan');
console.log(value)
