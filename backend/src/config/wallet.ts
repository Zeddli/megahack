/**
 * Wallet authentication configuration
 */

const walletConfig = {
  // JWT token configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'farm-protection-platform-secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  },
  
  // Wallet signature message prefix
  signaturePrefix: 'Farm Protection Authentication -',
  
  // Message for signature verification
  messageFormat: (nonce: string) => `${walletConfig.signaturePrefix} Nonce: ${nonce}`,
  
  // Supported wallet types
  supportedWallets: ['ethereum', 'solana'],
};

export default walletConfig; 