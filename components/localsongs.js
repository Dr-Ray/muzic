import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'

import * as MediaLibrary from 'expo-media-library'
import appContext from '../src/context'


const LocalSongs = () => {
    const {localAudio, setlocalAudio} = useContext(appContext);
    // get / request permission
    
    useEffect(()=> {
        const [audiopermission, requestpermission] = MediaLibrary.usePermissions();
        console.log(audiopermission)
    })
  return (
    <View>
      <Text>LocalSongs</Text>
    </View>
  )
}

export default LocalSongs