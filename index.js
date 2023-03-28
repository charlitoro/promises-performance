import Benchmarkify from "benchmarkify"
import bluebird from "bluebird"


const benchmark = new Benchmarkify("Promises performance research").printHeader();

// Create a test suite
const suite = benchmark.createSuite("Time of response comparison between native-promises, async/await and bluebird");


suite.add('async/await', async (done) => {
    await Promise.resolve(1)
    await Promise.resolve(2)
    done()
})

suite.add('native promises', (done) => {
    Promise.resolve(1)
    .then(() => Promise.resolve(2))
    .then(() => done())
})

suite.ref('bluebird promises', (done) => {
    bluebird.resolve(1)
    .then(() => bluebird.resolve(2))
    .then(() => done())
})

suite.run()