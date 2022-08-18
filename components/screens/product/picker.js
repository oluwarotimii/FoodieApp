import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'

const items = [{
  id: '92iijs7yta',
  name: 'Ondo'
}, {
  id: 'a0s0a8ssbsd',
  name: 'Ogun'
}, {
  id: '16hbajsabsd',
  name: 'Calabar'
}, {
  id: 'nahs75a5sg',
  name: 'Lagos'
}, {
  id: '667atsas',
  name: 'Maiduguri'
}, {
  id: 'hsyasajs',
  name: 'Anambra'
}, {
  id: 'djsjudksjd',
  name: 'Benue'
}, {
  id: 'sdhyaysdj',
  name: 'Kaduna'
}, {
  id: 'suudydjsjd',
  name: 'Abuja'
}]
const Picker = () => {
  const [SelectedItems, setselectedItems] = useState([])
  state = {
    selectedItems: []
  }

  onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems)
    // console.warn('Selected Items: ', selectedItems)
  }
  return (
    <View style={styles.container}>
      <View style={styles.multiSelectContainer}>
        <MultiSelect
          items={items}
          uniqueKey='id'
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={SelectedItems}
          selectText='Pick Items'
          searchInputPlaceholderText='Search Items...'
          onChangeInput={(text) => console.warn(text)}
          tagRemoveIconColor='#CCC'
          tagBorderColor='#CCC'
          tagTextColor='#CCC'
          selectedItemTextColor='#CCC'
          selectedItemIconColor='#CCC'
          itemTextColor='#000'
          displayKey='name'
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor='#CCC'
          submitButtonText='Submit'
          removeSelected
        />
      </View>
    </View>
  )
}

export default Picker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    backgroundColor: '#F5FCFF'
  },
  multiSelectContainer: {
    height: 400,
    width: '80%'
  }
}) 