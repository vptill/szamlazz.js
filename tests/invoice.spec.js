/* eslint-env mocha */
'use strict'

import xml2js from 'xml2js'
const parser = new xml2js.Parser()
import chai from 'chai'
const expect = chai.expect

import {Buyer, Invoice, Item, Seller} from '../index.js'
import {createSeller, createBuyer, createSoldItemNet, createSoldItemGross, createInvoice} from './resources/setup.js'

let seller
let buyer
let soldItem1
let soldItem2
let invoice

beforeEach(function (done) {
  seller = createSeller(Seller)
  buyer = createBuyer(Buyer)
  soldItem1 = createSoldItemNet(Item)
  soldItem2 = createSoldItemGross(Item)
  invoice = createInvoice(Invoice, seller, buyer, [ soldItem1, soldItem2 ])

  done()
})

describe('Invoice', function () {
  describe('constructor', function () {
    it('should set _options property', function (done) {
      expect(invoice).to.have.property('_options').that.is.an('object')
      done()
    })

    it('should set seller', function (done) {
      expect(invoice._options).to.have.property('seller').to.be.an.instanceof(Seller)
      done()
    })

    it('should set buyer', function (done) {
      expect(invoice._options).to.have.property('buyer').to.be.an.instanceof(Buyer)
      done()
    })

    it('should set items', function (done) {
      expect(invoice._options).to.have.property('items').that.is.an('array')
      done()
    })
  })
  describe('_generateXML', function () {
    it('should return valid XML', function (done) {
      parser.parseString('<wrapper>' + invoice._generateXML() + '</wrapper>', function (err, result) {
        if (!err) {
          expect(result).to.have.property('wrapper').that.is.an('object')
          done()
        }
      })
    })

    describe('generated XML', function () {
      let obj

      beforeEach(function (done) {
        parser.parseString('<wrapper>' + invoice._generateXML() + '</wrapper>', function (err, result) {
          if (!err) obj = result.wrapper
        })

        done()
      })

      it('should have `fejlec` node', function (done) {
        expect(obj).to.have.property('fejlec')
        done()
      })

      it('should have `elado` node', function (done) {
        expect(obj).to.have.property('elado')
        done()
      })

      it('should have `vevo` node', function (done) {
        expect(obj).to.have.property('vevo')
        done()
      })

      it('should have `tetelek` node', function (done) {
        expect(obj).to.have.property('tetelek')
        done()
      })
    })
  })
})
