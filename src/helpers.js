export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'
export const GREEN = 'success'
export const RED = 'danger'


export const DECIMALS = (10**18)

//Shortcut to aviod passing around web3 connection
export const ether = (wei) => {
  if(wei) {
    return(wei /DECIMALS) //18 Decimals placen
  }
}

// Tokens and ether havesome decimals resolution
 export const tokens = ether