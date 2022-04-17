import React from 'react';
import { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { MyButton } from './MyButton';
import styles from '../styles/styles';
import { colors } from '../styles/colors';

const frases = ['"Pelos poderes de Grayskull... Eu tenho a força!"',
                '"A suprema arte da guerra é derrotar o inimigo sem lutar."',
                '"Se o inimigo deixa uma porta aberta, precipitemo-nos por ela."',
                '"Triunfam aqueles que sabem quando lutar e quando esperar."'];

const balaoNormal = require('../../assets/balloon_green.jpg');
const balaoEstourado = require('../../assets/popped_balloon_green.jpg');

export const BalaoDaSorte = (props) => {

  const [balao, setBalao]=useState(balaoNormal);
  const [frase, setFrase]=useState('');
  const [desabilitarEstouro, setDesabilitarEstouro]=useState(false);

  const estourar = () => {
    let posicaoAleatoria = Math.floor(Math.random() * (frases.length - 0)) + 0;
    console.log(posicaoAleatoria);
    setBalao(balaoEstourado);
    setFrase(frases[posicaoAleatoria]);
    setDesabilitarEstouro(true);
  };

  const resetar = () => {
    setBalao(balaoNormal);
    setFrase('');
    setDesabilitarEstouro(false);
  };

  return (
    <View style={styles.container}>
      <Image source={balao} />
      <Text style={styles.paragraph}>
        {frase}
      </Text>
      <View style={styles.buttonView}>
        <MyButton
          style={styles.button} 
          text = 'ESTOURAR O BALÃO'
          onPress = {estourar}
          cor = {colors.springGreen}
          disabled = {desabilitarEstouro} />
      </View>
      <View style={styles.buttonView}>  
        <MyButton
          style={styles.button}
          text = 'RESETAR'
          onPress = {resetar}
          cor = {colors.darkSlateGray} />
        </View>  
    </View>
  );
}
export default BalaoDaSorte;
