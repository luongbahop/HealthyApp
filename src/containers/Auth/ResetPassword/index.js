import React, { Component } from 'react';

import { Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class ResetPassword extends Component {
  render() {
    return (
    <Container>
        <Content>
            <Grid>
                     <ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={require('../../../assets/images/background-main.png')} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text >Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                  
            </Grid>
        </Content>
    </Container>
    );
  }
}

