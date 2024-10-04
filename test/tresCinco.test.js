import { describe, it, expect } from 'vitest'

const multiTresCinco = (num) => {
  if (typeof num !== 'number') throw new Error('Please enter a number')
  if (Number.isNaN(num)) throw new Error('This parameter not valid')
  if (num % 3 === 0 && num % 5 === 0) return 'three and five'
  if (num % 3 === 0) return 'three'
  if (num % 5 === 0) return 'five'
  return num
}

describe('MultiTresCinco', () => {
  it('Is a function', () => {
    expect(typeof multiTresCinco).toBe('function')
  })
  it('should failed if not recieve number', () => {
    expect(() => multiTresCinco()).toThrowError('Please enter a number')
  })
  it('should failed if send invalid number parameter', () => {
    expect(() => multiTresCinco(NaN)).toThrowError('This parameter not valid')
  })
  it('should return "three" when num is multiple', () => {
    expect(multiTresCinco(3)).toBe('three')
  })
  it('should return "five" when num is multiple to three', () => {
    expect(multiTresCinco(5)).toBe('five')
  })
  it('should return "three and five" when num is multiple to five', () => {
    expect(multiTresCinco(15)).toBe('three and five')
  })
  it('should return num when num is not multiple to three or five', () => {
    expect(multiTresCinco(7)).toBe(7)
  })
})
