module.exports = {
  mySidebar: [
    'intro',
    'using-yeeldx',
    {
      type: 'category',
      label: 'Products',
      items: [
        {
          type: 'category',
          label: 'yVaults',
          items: [
            'products/yvaults/overview',
            'products/yvaults/vaults-and-strategies',
            'products/yvaults/vault-tokens',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/how-boost-works',
        'guides/how-to-add-a-custom-token-to-metamask',
        'guides/how-to-understand-yeeldbox-roi',
        // 'guides/how-apy-works',
        'guides/how-to-understand-strategies-descriptions',
      ],
    },
    'products/addresses',
  ],
}
