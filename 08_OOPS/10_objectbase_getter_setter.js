const user = {
    _email: 'akhilmishra@gmail.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase
    },
    set email(value){
        this._email = value
    }
}


//fayeda hm yha factory function use kr sktehain
// object bnao userka tea ke refrence me 
const tea = Object.create(user)
console.log(tea.email) ;
//ye _dikhata hai actually hm private property hai 
//toh ye hoga ki jb hm set ya get ka use krte hai toh vo _ka koi itta meaning ni rehta hai javascript me 
//toh ye jo class ka object bna hai uske pass ye email hai 
//yaad rkhna hmne email() bnaya hai but access krte time hm () ni kr re toh yhi btata hai ki getteer aur setter special method hai jo hm propertyu ke upr rkh re hain ;
//actually me dekhe toh hai kya getter setter meemory me leke aare aur memeory me deke aare  toh is leke ane ka deke ane ke process me jo javascript me overwrite krne ke liye getter aur sette r diya jata hai java script me 
//get  ek specisal keyword hai jo email property pe work kr rra hai jo hmne private krrkhi hai _se private kr rkhi usse ise kpoi m tlb ni ye kehta hai ki mai toh usse memeory se laaneka process overwrite krrra hun  aur memmrory me chodd keane me overwrite kr re 
//toh hua kya jb get kiya toh hmne kha ki this._email ko leke aoo aur usko uppercase kiya toh usko ni pta ki vo memoruy me kaise store hai kyunkli hmne wapis laate hue uske sath ched chaad ki 
//is itrah se set bhi hia ki set hai vo bhi kehta hai ki email() mere liye method hai prioperty hi hai aur mai use access krumngs vha pe use acceess krke value put kro 
//isi trah ki array ko length property lete  haijn tohg array ko kaise ptaki 9 hai ya 6 hai obvious si baathai vo calculkate ho ri 
 //vha bhi behind the scene getter setter hi chlkta hai 