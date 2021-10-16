const PokemonModel = require("./PokemonModel")
// @ponicode
describe("addPokemon", () => {
    let inst

    beforeEach(() => {
        inst = new PokemonModel.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addPokemon("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addPokemon(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addPokemon(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addPokemon(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addPokemon("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addPokemon(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removePokemon", () => {
    let inst

    beforeEach(() => {
        inst = new PokemonModel.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.removePokemon([56784, 12345, 987650, 12345, 12345])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.removePokemon([12, 12345, 12, 56784, 987650])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.removePokemon([12, 12, 12, "bc23a9d531064583ace8f67dad60f6bb", 56784])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.removePokemon([56784, 12345, "a1969970175", "a1969970175", 12345])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.removePokemon([56784, 56784, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.removePokemon(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clearAll", () => {
    let inst

    beforeEach(() => {
        inst = new PokemonModel.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.clearAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getPokemons", () => {
    let inst

    beforeEach(() => {
        inst = new PokemonModel.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getPokemons()
        }
    
        expect(callFunction).not.toThrow()
    })
})
