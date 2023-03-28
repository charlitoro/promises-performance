# Promises Performance

This simple code compare the performance of use [__bluebird__](https://www.npmjs.com/package/bluebird) package, __async/await__ and __native promises__, taking bluebird as a reference. 

## Stack
* Nodejs
* [benchmarkify](https://www.npmjs.com/package/benchmarkify): Benchmark framework for NodeJS for measure the execution time of JS codes

## Run
```bash 
npm run test
```

## output example
```bash
===============================================
  Promises performance research  
===============================================

Platform info:
==============
   Darwin 20.6.0 x64
   Node.JS: 18.15.0
   V8: 10.2.154.26-node.25
   CPU: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz × 12
   Memory: 16 GB

Suite: Time of response comparison between native-promises, async/await and bluebird
✔ async/await*              5,455,794 rps
✔ native promises*          5,196,108 rps
✔ bluebird promises*        2,909,618 rps

   async/await*            +87.51%      (5,455,794 rps)   (avg: 183ns)
   native promises*        +78.58%      (5,196,108 rps)   (avg: 192ns)
   bluebird promises* (#)       0%      (2,909,618 rps)   (avg: 343ns)
-----------------------------------------------------------------------
```