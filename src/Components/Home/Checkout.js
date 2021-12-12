import * as React from 'react'
import { Text, View, TouchableOpacity, Modal, StatusBar, Image, Alert, Dimensions, SafeAreaView, TextInput, StyleSheet, Button, ScrollView, ImageBackground } from 'react-native'
import { Radio, Center, NativeBaseProvider  , Checkbox} from "native-base"
export default class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    selected: false,
                    content: "الدفع كاش عند الاستلام",
                    color: 'gray',
        


                }, {
                    selected: false,
                    content: 'الدفع ببطاقة الأتمان',
                    color: 'gray',
            
                }
            ],
            address: "",
            addressError: '',
            phone: "",
            phoneError: "",
        }
    }


    Confirm() {
        let errors = 0;

        if (this.state.address.trim() == "") {
            errors++
            this.setState({ addressError: "يجب إدخال عنوان" })

        } else if ((this.state.address.trim()).length < 3) {
            errors++
            this.setState({ address: "يجب أن يكون العنوان 3 أحرف أو أكثر" })
        } else {
            this.setState({ addressError: "" })
        }




        if (this.state.phone == "") {
            errors++
            this.setState({ phoneError: "يجب إدخال رقم الهاتف" })
        } else if (

            this.state.phone.length != 11 || (
                !this.state.phone.startsWith("015") &&
                !this.state.phone.startsWith("010") &&
                !this.state.phone.startsWith("012") &&
                !this.state.phone.startsWith("011")
            ) ||
            this.state.phone * 0 != 0
        ) {
            errors++
            this.setState({ phoneError: "يجب إدخال رقم صالح" })
        } else {
            this.setState({ phoneError: "" })
        }

        if (errors == 0) {
            alert('تم الطلب بنجاح')
        }


    }



    Change(index) {

        let list = this.state.list
        if (list[index].selected == false) {

            for (let i = 0; i < list.length; i++) {
                list[i].selected = false
                list[i].color = "gray"
            }
            list[index].selected = true
            list[index].color = "green"



        } else {
            list[index].selected = false
            list[index].color = "gray"

        }
        this.setState({ list, })
    }
    render() {

        return (

            <>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <View

                    style={{
                        height: "100%",
                        width: '100%',
                        backgroundColor: "#fff",
                   
                    }}
                >

                    <View style={{
                        width: '100%',
                        height: 45,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 0.5,
                        elevation: 0.9,
                        justifyContent: "center",
                        alignItems: "center"

                    }}>


                        <Text
                            style={{
                                color: "#10b50a",
                                fontSize: 20,
                                fontWeight: "bold",

                            }}
                        >Checkout</Text>
                    </View>

                    <View style={{
                        width: "100%",
                        height: '100%',
                        backgroundColor: "#fff",
                        alignItems: "center"
                    }}>


                        <View style={{
                            width: '100%',
                            height: 27,
                            paddingLeft: 10,
                            alignItems: "flex-start",
                            justifyContent: "center",
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: "#333",
                                fontSize: 20,

                            }}>
                                يرجي كتابة البيانات بالتفصيل و تأكد من صحتها :

                            </Text>

                        </View>

                        <TextInput style={{
                            width: '85%',
                            height: 50,
                            marginTop: 10,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#333',
                            fontSize: 16,
                            paddingLeft: 10,
                            color: '#333',
                            textAlign:'right'
                            

                        }}
                            placeholder="العنوان.."
                            multiline
                            placeholderTextColor="#333"
                            value={this.state.address}
                            onChangeText={(value) => {
                                this.setState({ address: value })

                            }}
                        />

                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: "#f00",
                            textAlign: 'center',
                            marginTop: 2
                        }}>{this.state.addressError}</Text>



                        <TextInput style={{
                            width: '85%',
                            height: 50,
                            marginTop: 10,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#333',
                            fontSize: 16,
                            paddingLeft: 10,
                            color: '#333',
                            textAlign:'right'

                        }}
                            placeholder="رقم الهاتف.."
                            multiline
                            placeholderTextColor="#333"
                            value={this.state.phone}
                            onChangeText={(value) => {
                                this.setState({ phone: value })

                            }}


                        />

                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: "#f00",
                            textAlign: 'center',
                            marginTop: 2
                        }}>{this.state.phoneError}</Text>





                        <View style={{
                            width: '100%',
                            height: 27,
                            paddingLeft: 10,
                            margin: 5,
                            alignItems: "flex-start",
                            justifyContent: "center",
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: "#333",
                                fontSize: 22,

                            }}>
                                يرجي تحديد طريقة الدفع :

                            </Text>


                        </View>


                        <View style={{
                            width: '100%',
                            height: 150,
                        }}>


                            {
                                this.state.list.map((list, index) => (
                                    <>
                                        <NativeBaseProvider>
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    paddingVertical: 10,
                                                    alignItems: 'center',
                                                    width: '90%',
                                                    alignSelf: 'center',
                                                }}>
                                               
                                                <Checkbox
                                                    isChecked={list.selected}
                                                    colorScheme={list.color}
                                                    onChange={() => {
                                                        this.Change(index);
                                                    }}
                                                    value={list.content}>
                                                    {list.content}
                                                </Checkbox>

                                            </View>
                                        </NativeBaseProvider>
                                    </>
                                ))
                            }

                        </View>

                        <TouchableOpacity style={{
                            width: '85%',
                            backgroundColor: '#10b50a',
                            height: 50,
                            justifyContent: "center",
                            alignItems: 'center',
                            borderRadius: 10

                        }}

                            onPress={() => {
                                this.Confirm()
                            }}

                        >

                            <Text style={{
                                color: "#fff",
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>

                                تأكد
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>


            </>

        )
    }
}


