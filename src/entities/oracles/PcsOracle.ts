import { ChainId } from '@sushiswap/core-sdk'

import { Oracle } from './Oracle'

export class PcsOracle extends Oracle {
  constructor(chainId: ChainId, address: string, data: string) {
    super(chainId, address, 'PancakeSwap', data)
  }
}
