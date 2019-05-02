import React, {Component} from 'react';
import { Provider } from  'mobx-react'
import RootStore from './Models/RootStore'

import PokemonProvider from './Containers/Pokemons'

const rootStore = new RootStore()

export default class App extends Component {
  render() {
    return (
      <Provider {...rootStore.getStores()}>
        <PokemonProvider/>
      </Provider>
    );
  }
}

