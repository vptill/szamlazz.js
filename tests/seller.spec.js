/* eslint-env mocha */
'use strict'

import xml2js from 'xml2js'
const parser = new xml2js.Parser()
import chai from 'chai'
const expect = chai.expect

import {Seller} from '../index.js'
import {createSeller} from './resources/setup.js'

let seller

beforeEach(function (done) {
  seller = createSeller(Seller)

  done()
})

describe('Seller', function () {
  describe('constructor', function () {
    it('should set _options property', function (done) {
      expect(seller).to.have.property('_options').that.is.an('object')
      done()
    })
  })

  describe('_generateXML', function () {
    it('should return valid XML', function (done) {
      parser.parseString(seller._generateXML(), function (err, result) {
        if (!err) {
          expect(result).to.have.property('elado').that.is.an('object')
          done()
        }
      })
    })
  })
})
