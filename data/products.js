/**
 * Russo Joyería - Catálogo Oficial de Productos (Colección 2026)
 * Selección Curada: Exactamente 20 piezas representativas por cada una de las 5 categorías principales
 * Total Productos: 100
 */

const PRODUCTS_DATA = [
  {
    "id": "prod-001",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Tio Rico - Azul",
    "ref": "Ref. 20000-AZUL",
    "price": 90000,
    "originalPrice": 112000,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Azul Zafiro",
        "code": "AZUL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20000-AZUL).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20000-AZUL.jpg"
  },
  {
    "id": "prod-002",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Tio Rico - Verde",
    "ref": "Ref. 20000-VERDE",
    "price": 90000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      },
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20000-VERDE).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20000-VERDE.jpg"
  },
  {
    "id": "prod-003",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Cherry",
    "ref": "Ref. 20002",
    "price": 35000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20002).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20002.jpg"
  },
  {
    "id": "prod-004",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "El Viajero",
    "ref": "Ref. 20004",
    "price": 80000,
    "originalPrice": 100000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20004).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20004.jpg"
  },
  {
    "id": "prod-005",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Signo Peso",
    "ref": "Ref. 20005",
    "price": 60000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20005).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20005.jpg"
  },
  {
    "id": "prod-006",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Royal Green 8 mm",
    "ref": "Ref. 20006",
    "price": 50000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20006).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20006.jpg"
  },
  {
    "id": "prod-007",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Amour Doré 17*16 mm",
    "ref": "Ref. 20007",
    "price": 60000,
    "originalPrice": 75000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20007).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20007.jpg"
  },
  {
    "id": "prod-008",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Corazon Sol Mini",
    "ref": "Ref. 20008",
    "price": 35000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20008).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20008.jpg"
  },
  {
    "id": "prod-009",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Cruz L 16 mm",
    "ref": "Ref. 20009",
    "price": 45000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20009).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20009.jpg"
  },
  {
    "id": "prod-010",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Cruz L Mini 9 mm",
    "ref": "Ref. 20010",
    "price": 40000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20010).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20010.jpg"
  },
  {
    "id": "prod-011",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Milagrosa 12 mm",
    "ref": "Ref. 20012",
    "price": 45000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20012).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20012.jpg"
  },
  {
    "id": "prod-012",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Milagrosa Immaculata 21 mm",
    "ref": "Ref. 20013",
    "price": 50000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 20013).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20013.jpg"
  },
  {
    "id": "prod-013",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Osito Circonias",
    "ref": "Ref. 23003",
    "price": 50000,
    "originalPrice": 62000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23003).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23003.jpg"
  },
  {
    "id": "prod-014",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Ojo Turco Mini Circonias",
    "ref": "Ref. 23019",
    "price": 50000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23019).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23019.jpg"
  },
  {
    "id": "prod-015",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Cruz Sagrada Circonias Cristal",
    "ref": "Ref. 23035-CRISTAL",
    "price": 90000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23035-CRISTAL).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23035-CRISTAL.jpg"
  },
  {
    "id": "prod-016",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Cruz Circonia 4 Cms",
    "ref": "Ref. 23052-CRISTAL",
    "price": 70000,
    "originalPrice": 88000,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23052-CRISTAL).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23052-CRISTAL.jpg"
  },
  {
    "id": "prod-017",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Cruz Buen Pastor",
    "ref": "Ref. 23065",
    "price": 70000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23065).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23065.jpg"
  },
  {
    "id": "prod-018",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Estrella Circonia CRISTAL",
    "ref": "Ref. 23068-CRISTAL",
    "price": 50000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23068-CRISTAL).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23068-CRISTAL.jpg"
  },
  {
    "id": "prod-019",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Estrella Circonia VERDE",
    "ref": "Ref. 23068-VERDE",
    "price": 50000,
    "originalPrice": 62000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      },
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23068-VERDE).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23068-VERDE.jpg"
  },
  {
    "id": "prod-020",
    "category": "dijes",
    "categoryName": "Dijes",
    "name": "Luna Circonia CRISTAL",
    "ref": "Ref. 23069-CRISTAL",
    "price": 50000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Joya oficial de la Colección Russo 2026. Fabricada en Oro Laminado 18K con triple recubrimiento y garantía certificada (Ref. 23069-CRISTAL).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23069-CRISTAL.jpg"
  },
  {
    "id": "prod-021",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Cat Mini",
    "ref": "Ref. 30037",
    "price": 65000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30037).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30037.jpg"
  },
  {
    "id": "prod-022",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Topo Quadra Crystal 4 mm",
    "ref": "Ref. 30038",
    "price": 65000,
    "originalPrice": 81000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30038).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30038.jpg"
  },
  {
    "id": "prod-023",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Virgen de Guadalupe 9 mm",
    "ref": "Ref. 30041",
    "price": 75000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30041).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30041.jpg"
  },
  {
    "id": "prod-024",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Corazon Crystal",
    "ref": "Ref. 30044",
    "price": 70000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30044).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30044.jpg"
  },
  {
    "id": "prod-025",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Amore Halo 9 mm",
    "ref": "Ref. 30046",
    "price": 85000,
    "originalPrice": 106000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30046).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30046.jpg"
  },
  {
    "id": "prod-026",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Clover Luxe 12 mm",
    "ref": "Ref. 30048",
    "price": 80000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30048).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30048.jpg"
  },
  {
    "id": "prod-027",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga CC 13 mm",
    "ref": "Ref. 30049",
    "price": 80000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30049).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30049.jpg"
  },
  {
    "id": "prod-028",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Regina 7 mm",
    "ref": "Ref. 30054",
    "price": 65000,
    "originalPrice": 81000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30054).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30054.jpg"
  },
  {
    "id": "prod-029",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Love CTR 5 mm",
    "ref": "Ref. 30055",
    "price": 65000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30055).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30055.jpg"
  },
  {
    "id": "prod-030",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Coeur 17,2 mm",
    "ref": "Ref. 30057",
    "price": 80000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30057).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30057.jpg"
  },
  {
    "id": "prod-031",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Avalon 10 mm",
    "ref": "Ref. 30059",
    "price": 70000,
    "originalPrice": 88000,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30059).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30059.jpg"
  },
  {
    "id": "prod-032",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Hexa Grial 13 mm",
    "ref": "Ref. 30061",
    "price": 75000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30061).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30061.jpg"
  },
  {
    "id": "prod-033",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Codice 15 mm",
    "ref": "Ref. 30062",
    "price": 80000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30062).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30062.jpg"
  },
  {
    "id": "prod-034",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Amare 12 mm",
    "ref": "Ref. 30064",
    "price": 75000,
    "originalPrice": 94000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30064).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30064.jpg"
  },
  {
    "id": "prod-035",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Élite 12 mm",
    "ref": "Ref. 30068",
    "price": 70000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30068).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30068.jpg"
  },
  {
    "id": "prod-036",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Wave 18 mm",
    "ref": "Ref. 30069",
    "price": 80000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30069).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30069.jpg"
  },
  {
    "id": "prod-037",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Candonga Dalia 15 mm",
    "ref": "Ref. 30072",
    "price": 85000,
    "originalPrice": 106000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30072).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30072.jpg"
  },
  {
    "id": "prod-038",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Topo Esmerald 3 mm",
    "ref": "Ref. 30075",
    "price": 65000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30075).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30075.jpg"
  },
  {
    "id": "prod-039",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Topo Esmerald 6 mm",
    "ref": "Ref. 30077",
    "price": 75000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30077).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30077.jpg"
  },
  {
    "id": "prod-040",
    "category": "aretes",
    "categoryName": "Aretes",
    "name": "Topo Cristal 4 mm",
    "ref": "Ref. 30079",
    "price": 70000,
    "originalPrice": 88000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Aretes ultralivianos en Oro Laminado 18K. Ajuste anatómico seguro y antialérgico, 100% libre de níquel (Ref. 30079).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/30079.jpg"
  },
  {
    "id": "prod-041",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Serpiente 4 mm 65 Cms",
    "ref": "Ref. 44068",
    "price": 400000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44068).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44068.jpg"
  },
  {
    "id": "prod-042",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Continua 65 cms 4 mm",
    "ref": "Ref. 44468",
    "price": 320000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44468).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44468.jpg"
  },
  {
    "id": "prod-043",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Destellos 2.5 Mm 65 Cms",
    "ref": "Ref. 44753",
    "price": 200000,
    "originalPrice": 250000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44753).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44753.jpg"
  },
  {
    "id": "prod-044",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Veneciana Gruesa 65 Cms",
    "ref": "Ref. 44768",
    "price": 320000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44768).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44768.jpg"
  },
  {
    "id": "prod-045",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Serpiente Plana Delg 1mm 65cm",
    "ref": "Ref. 44833",
    "price": 200000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44833).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44833.jpg"
  },
  {
    "id": "prod-046",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Escalera y Plana 65 Cms",
    "ref": "Ref. 44873",
    "price": 160000,
    "originalPrice": 200000,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44873).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44873.jpg"
  },
  {
    "id": "prod-047",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "T. Chino Doble Carril 65cm",
    "ref": "Ref. 44888",
    "price": 550000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44888).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44888.jpg"
  },
  {
    "id": "prod-048",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Escalera 40 Cms",
    "ref": "Ref. 44930",
    "price": 75000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44930).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44930.jpg"
  },
  {
    "id": "prod-049",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Escalera 45 Cms",
    "ref": "Ref. 44936",
    "price": 120000,
    "originalPrice": 150000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 44936).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/44936.jpg"
  },
  {
    "id": "prod-050",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Barril Nova IT 45 Cms",
    "ref": "Ref. 45021",
    "price": 290000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45021).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45021.jpg"
  },
  {
    "id": "prod-051",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Barril Nova IT 65 Cms",
    "ref": "Ref. 45023",
    "price": 360000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45023).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45023.jpg"
  },
  {
    "id": "prod-052",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Arrow IT 2.6 mm 45 Cms",
    "ref": "Ref. 45026",
    "price": 200000,
    "originalPrice": 250000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45026).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45026.jpg"
  },
  {
    "id": "prod-053",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Arrow IT 2,6 mm 65 Cms",
    "ref": "Ref. 45028",
    "price": 320000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45028).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45028.jpg"
  },
  {
    "id": "prod-054",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Gucci IT 2,5 mm 45 Cms",
    "ref": "Ref. 45036",
    "price": 320000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45036).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45036.jpg"
  },
  {
    "id": "prod-055",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Gucci IT 2,5 mm 65 Cms",
    "ref": "Ref. 45038",
    "price": 440000,
    "originalPrice": 550000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45038).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45038.jpg"
  },
  {
    "id": "prod-056",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Barril italy 3 mm 45 Cms",
    "ref": "Ref. 45041",
    "price": 550000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45041).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45041.jpg"
  },
  {
    "id": "prod-057",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Barril italy 3 mm 65 Cms",
    "ref": "Ref. 45043",
    "price": 950000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45043).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45043.jpg"
  },
  {
    "id": "prod-058",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Singapur IT 1.2 mm 40 Cms",
    "ref": "Ref. 45045",
    "price": 70000,
    "originalPrice": 88000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45045).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45045.jpg"
  },
  {
    "id": "prod-059",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Marine IT 2,8 mm 65 Cms",
    "ref": "Ref. 45068",
    "price": 260000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "65 Cms (Largo)",
        "code": "65CM",
        "available": true
      },
      {
        "name": "50 Cms (Medio)",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45068).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45068.jpg"
  },
  {
    "id": "prod-060",
    "category": "cadenas",
    "categoryName": "Cadenas",
    "name": "Barril Prismc IT 45 Cms",
    "ref": "Ref. 45071",
    "price": 290000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Cadena con tejido italiano en Oro Laminado 18K. Broche de seguridad reforzado y brillo continuo (Ref. 45071).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45071.jpg"
  },
  {
    "id": "prod-061",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Franco 20 Cms",
    "ref": "Ref. 54007",
    "price": 380000,
    "originalPrice": 475000,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 54007).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/54007.jpg"
  },
  {
    "id": "prod-062",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Vintage 1.2 mm 16 Cms + Ext",
    "ref": "Ref. 54041",
    "price": 70000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 54041).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/54041.jpg"
  },
  {
    "id": "prod-063",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Blue Dream 16 Cms + Extensor",
    "ref": "Ref. 54071",
    "price": 100000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 54071).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/54071.jpg"
  },
  {
    "id": "prod-064",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Sweet Lemon 16 Cms + Extensor",
    "ref": "Ref. 54101",
    "price": 120000,
    "originalPrice": 150000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 54101).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/54101.jpg"
  },
  {
    "id": "prod-065",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Singapur 16 Cms 1.5 mm + Ext",
    "ref": "Ref. 54546",
    "price": 45000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 54546).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/54546.jpg"
  },
  {
    "id": "prod-066",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Grumetta Rada IT 16 CMS",
    "ref": "Ref. 55011",
    "price": 50000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55011).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55011.jpg"
  },
  {
    "id": "prod-067",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Barril Nova IT 16 Cms",
    "ref": "Ref. 55021",
    "price": 120000,
    "originalPrice": 150000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55021).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55021.jpg"
  },
  {
    "id": "prod-068",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Barril Nova IT 19.5 Cms",
    "ref": "Ref. 55022",
    "price": 150000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55022).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55022.jpg"
  },
  {
    "id": "prod-069",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Arrow IT 2.6 mm 16.5 Cms",
    "ref": "Ref. 55026",
    "price": 100000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55026).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55026.jpg"
  },
  {
    "id": "prod-070",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Arrow IT 2.6 mm 19.5 Cms",
    "ref": "Ref. 55027",
    "price": 110000,
    "originalPrice": 138000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55027).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55027.jpg"
  },
  {
    "id": "prod-071",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Marine IT 1.5 mm 16 Cms",
    "ref": "Ref. 55061",
    "price": 60000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55061).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55061.jpg"
  },
  {
    "id": "prod-072",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Marine IT 1.5 mm 19.5 Cms",
    "ref": "Ref. 55062",
    "price": 70000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55062).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55062.jpg"
  },
  {
    "id": "prod-073",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Marine IT 2,8 mm 19.5 Cms",
    "ref": "Ref. 55067",
    "price": 120000,
    "originalPrice": 150000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55067).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55067.jpg"
  },
  {
    "id": "prod-074",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Barril Prismc IT 16 Cms",
    "ref": "Ref. 55071",
    "price": 120000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "16 Cms + Extensor",
        "code": "16CM",
        "available": true
      },
      {
        "name": "19.5 Cms",
        "code": "19CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 55071).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/55071.jpg"
  },
  {
    "id": "prod-075",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Clover 1,3 cm 45 Cms + Ext",
    "ref": "Ref. 40002",
    "price": 120000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 40002).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/40002.jpg"
  },
  {
    "id": "prod-076",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Sparkle Heart 12 mm 45 Cms",
    "ref": "Ref. 40012",
    "price": 110000,
    "originalPrice": 138000,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "45 Cms (Estándar)",
        "code": "45CM",
        "available": true
      },
      {
        "name": "50 Cms",
        "code": "50CM",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 40012).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/40012.jpg"
  },
  {
    "id": "prod-077",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "MSK 35*8 mm 40 Cms + Ext",
    "ref": "Ref. 40111",
    "price": 140000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 40111).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/40111.jpg"
  },
  {
    "id": "prod-078",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "Corinna 26*8 mm 40 Cms + Ext",
    "ref": "Ref. 40115",
    "price": 120000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 40115).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/40115.jpg"
  },
  {
    "id": "prod-079",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "VC Nacar 42 Cms + Extensor",
    "ref": "Ref. 45006-NACAR",
    "price": 100000,
    "originalPrice": 125000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Nácar Blanco",
        "code": "NACAR",
        "available": true
      },
      {
        "name": "Ónix Negro",
        "code": "NEGRO",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 45006-NACAR).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45006-NACAR.jpg"
  },
  {
    "id": "prod-080",
    "category": "pulseras",
    "categoryName": "Pulseras & Gargantillas",
    "name": "VC Negro 42 Cms + Extensor",
    "ref": "Ref. 45006-NEGRO",
    "price": 100000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Ónix Negro",
        "code": "NEGRO",
        "available": true
      },
      {
        "name": "Nácar Blanco",
        "code": "NACAR",
        "available": true
      }
    ],
    "description": "Pulsera / Gargantilla con eslabones italianos pulidos a espejo y broche seguro. Resistente al uso diario (Ref. 45006-NEGRO).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/45006-NEGRO.jpg"
  },
  {
    "id": "prod-081",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Vincor 1.7 mm",
    "ref": "Ref. 20001",
    "price": 85000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20001).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20001.jpg"
  },
  {
    "id": "prod-082",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Atlético Nacional 15 mm",
    "ref": "Ref. 20016",
    "price": 80000,
    "originalPrice": 100000,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20016).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20016.jpg"
  },
  {
    "id": "prod-083",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Atlético Nacional 10 mm",
    "ref": "Ref. 20017",
    "price": 75000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20017).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20017.jpg"
  },
  {
    "id": "prod-084",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "11:11",
    "ref": "Ref. 20019",
    "price": 75000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20019).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20019.jpg"
  },
  {
    "id": "prod-085",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Gucci Con Circonias",
    "ref": "Ref. 20020",
    "price": 70000,
    "originalPrice": 88000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20020).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20020.jpg"
  },
  {
    "id": "prod-086",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Balon de Futbol 8 mm",
    "ref": "Ref. 20046",
    "price": 55000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20046).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20046.jpg"
  },
  {
    "id": "prod-087",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Cruz Lisa 10 mm",
    "ref": "Ref. 20047",
    "price": 55000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20047).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20047.jpg"
  },
  {
    "id": "prod-088",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Virgen de Fatima 12.6 mm",
    "ref": "Ref. 20060",
    "price": 60000,
    "originalPrice": 75000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20060).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20060.jpg"
  },
  {
    "id": "prod-089",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Infinito Liso",
    "ref": "Ref. 20344",
    "price": 70000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 20344).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/20344.jpg"
  },
  {
    "id": "prod-090",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Rondel Tallado",
    "ref": "Ref. 22486",
    "price": 50000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 22486).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/22486.jpg"
  },
  {
    "id": "prod-091",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Rondel Tallado 8 Mm",
    "ref": "Ref. 22496",
    "price": 60000,
    "originalPrice": 75000,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 22496).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/22496.jpg"
  },
  {
    "id": "prod-092",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Guadalupe Tallada 9 mm",
    "ref": "Ref. 22550",
    "price": 65000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 22550).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/22550.jpg"
  },
  {
    "id": "prod-093",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Avion",
    "ref": "Ref. 23007",
    "price": 65000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23007).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23007.jpg"
  },
  {
    "id": "prod-094",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "San Miguel Silueta",
    "ref": "Ref. 23037",
    "price": 80000,
    "originalPrice": 100000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23037).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23037.jpg"
  },
  {
    "id": "prod-095",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Cruz Pendulo con Circonias",
    "ref": "Ref. 23038-CRISTAL",
    "price": 105000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Cristal Blanco",
        "code": "CRISTAL",
        "available": true
      },
      {
        "name": "Verde Esmeralda",
        "code": "VERDE",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23038-CRISTAL).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23038-CRISTAL.jpg"
  },
  {
    "id": "prod-096",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Estrella",
    "ref": "Ref. 23043",
    "price": 60000,
    "originalPrice": null,
    "isNew": true,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23043).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23043.jpg"
  },
  {
    "id": "prod-097",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Símbolo Pí",
    "ref": "Ref. 23081",
    "price": 60000,
    "originalPrice": 75000,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23081).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23081.jpg"
  },
  {
    "id": "prod-098",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Virgen del Carmen",
    "ref": "Ref. 23105",
    "price": 60000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23105).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23105.jpg"
  },
  {
    "id": "prod-099",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Virgen del Carmen",
    "ref": "Ref. 23106",
    "price": 60000,
    "originalPrice": null,
    "isNew": false,
    "isBestSeller": false,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23106).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23106.jpg"
  },
  {
    "id": "prod-100",
    "category": "exclusividades",
    "categoryName": "Exclusividades",
    "name": "Sol",
    "ref": "Ref. 23113",
    "price": 65000,
    "originalPrice": 81000,
    "isNew": false,
    "isBestSeller": true,
    "variants": [
      {
        "name": "Dorado 18K Oficial",
        "code": "STD",
        "available": true
      }
    ],
    "description": "Pieza exclusiva de edición limitada de nuestro catálogo oficial. Diseño detallado en alto relieve (Ref. 23113).",
    "material": "Oro Laminado 18K & Circonias Suizas Grado AAA",
    "dimension": "Medida oficial de catálogo",
    "image": "images/products/23113.jpg"
  }
];

const RUSSO_CONFIG = {
  storeName: "Russo Joyería",
  slogan: "Catálogo Oficial Colección 2026 | Oro Laminado 18K & Joyería Fina",
  whatsappNumber: "573332378784",
  whatsappDisplay: "+57 333 237 8784",
  instagram: "@russo_joyeria",
  instagramUrl: "https://instagram.com/russo_joyeria",
  location: "Medellín / Envíos a toda Colombia",
  freeShippingThreshold: 150000,
  standardShippingCost: 12000,
  categories: [
    {
        "id": "all",
        "name": "Todos",
        "count": 100,
        "icon": "sparkles",
        "description": "Muestra selecta de 100 joyas exclusivas"
    },
    {
        "id": "dijes",
        "name": "Dijes",
        "count": 20,
        "icon": "sparkles",
        "description": "Medallas, cruces, figuras y amuletos en Oro Laminado 18K"
    },
    {
        "id": "aretes",
        "name": "Aretes",
        "count": 20,
        "icon": "gem",
        "description": "Candongas, topos, huggies y earcuffs italianos"
    },
    {
        "id": "cadenas",
        "name": "Cadenas",
        "count": 20,
        "icon": "link",
        "description": "Tejidos cubanos, venecianos, serpentina y diseños Ice"
    },
    {
        "id": "pulseras",
        "name": "Pulseras & Gargantillas",
        "count": 20,
        "icon": "crown",
        "description": "Pulseras tennis, eslabones italianos y gargantillas chokers"
    },
    {
        "id": "exclusividades",
        "name": "Exclusividades",
        "count": 20,
        "icon": "star",
        "description": "Piezas únicas de alta demanda, dijes personalizados y amuletos"
    }
]
};
