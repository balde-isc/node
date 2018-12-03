'use strict'
  const setUpDatabase = require('./lib/db');
  const setUpAgentModel = require('./models/agent');
  const setUpMetricModel = require('./models/metric');

module.exports = async function (config) {
  const Agent = {}
  const Metric = {}
  return {
    Agent,
    Metric
  }
}
