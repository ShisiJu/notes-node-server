#!/usr/bin/env node

const NODE_ENV = process.env.NODE_ENV || 'development'

global.__CONFIG = require('../config')[NODE_ENV]



