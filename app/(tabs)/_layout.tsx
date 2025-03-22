import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { shadow } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      position: 'absolute',
      bottom: 20,
      borderRadius: 500,
      height: 65,
      backgroundColor: colors.light.secondary,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      ...shadow.heavy
    },
    tabIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: colors.light.primary,
      shadowColor: colors.light.primary,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 7,
      elevation: 10,
    },
  });

  return (<>
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          
        }} 
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.activeTab]}>
                <FontAwesome5 name='home' size={size} color={focused ? colors.light.muted : color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='transactions'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.activeTab]}>
                <FontAwesome5 name='exchange-alt' size={size} color={focused ? colors.light.muted : color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='settings'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.activeTab]}>
                <Ionicons name='settings-sharp' size={size} color={focused ? colors.light.muted : color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.activeTab]}>
                <FontAwesome5 name='user' size={size} color={focused ? colors.light.muted : color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
    <StatusBar style='dark' />
    </>
  );
};

export default Layout;