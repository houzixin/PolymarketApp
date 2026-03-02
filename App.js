// App.js - 主入口
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/screens/Dashboard';
import Opportunities from './src/screens/Opportunities';
import Trades from './src/screens/Trades';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#8b949e',
          tabBarStyle: {
            backgroundColor: '#161b22',
            borderTopColor: '#30363d',
          },
          headerStyle: {
            backgroundColor: '#0f1419',
          },
          headerTintColor: '#fff',
        }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{ 
            title: '📊 首页',
            tabBarLabel: '首页'
          }}
        />
        <Tab.Screen 
          name="Opportunities" 
          component={Opportunities}
          options={{ 
            title: '🎯 机会',
            tabBarLabel: '机会'
          }}
        />
        <Tab.Screen 
          name="Trades" 
          component={Trades}
          options={{ 
            title: '📝 交易',
            tabBarLabel: '交易'
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{ 
            title: '⚙️ 设置',
            tabBarLabel: '设置'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
