import { ChainId } from '@sushiswap/core-sdk'

export abstract class Oracle {
  chainId = ChainId.ETHEREUM
  address = ''
  data = ''
  name = ''
  warning = ''
  error = ''
  constructor(chainId, address, name, data) {
    this.chainId = chainId
    this.address = address
    this.data = data
    this.name = name
  }
}
