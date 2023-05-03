/*
Conversion Calculator
Written by Jason Rae
myScript.js
*/

function convertMass(source,valNum) {
	valNum = parseFloat(valNum)
	var inputPound = document.getElementById("inputPound")
	var inputOunce = document.getElementById("inputOunce")
	var inputGram = document.getElementById("inputGram")
	var inputKilogram = document.getElementById("inputKilogram")
	var inputStone = document.getElementById("inputStone")
	var inputMilligram = document.getElementById("inputMilligram")
	if (source=="inputPound") {
		inputOunce.value=(valNum*16)
		inputGram.value=(valNum*453.592)
		inputKilogram.value=(valNum*0.453592)
		inputStone.value=(valNum/14)
		inputMilligram.value=(valNum*453592)
	}
    if (source=="inputOunce") {
		inputPound.value=(valNum/16)
		inputGram.value=(valNum*28.3495)
		inputKilogram.value=(valNum/35.274)
		inputMilligram.value=(valNum*28349.5)
		inputStone.value=(valNum/224)
	}
    if (source=="inputGram") {
		inputPound.value=(valNum*0.00220462)
		inputOunce.value=(valNum*0.035274)
		inputKilogram.value=(valNum/1000)
		inputStone.value=(valNum*0.000157473)
		inputMilligram.value=(valNum*1000)
	}
	if (source=="inputKilogram") {
		inputMilligram.value=(valNum*1e+6)
		inputPound.value=(valNum*2.20462)
		inputOunce.value=(valNum*35.274)
		inputGram.value=(valNum*1000)
		inputStone.value=(valNum*0.15743)
	}
	if (source=="inputStone") {
		inputPound.value=(valNum*14)
		inputOunce.value=(valNum*224)
		inputKilogram.value=(valNum*6.35029)
		inputMilligram.value=(valNum*6.35e+6)
		inputGram.value=(valNum*6350.29)
	}
	if (source=="inputMilligram") {
		inputGram.value=(valNum/1000)
		inputKilogram.value=(valNum/1e+6)
		inputPound.value=(valNum*2.2046e-6)
		inputOunce.value=(valNum*3.5274e-5)
		inputStone.value=(valNum*1.5747e-7)
	}
}
function convertVolume(source,valNum) {
	valNum = parseFloat(valNum)
	var inputLiter = document.getElementById("inputLiter")
	var inputMilliliter = document.getElementById("inputMilliliter")
	var inputImpGal = document.getElementById("inputImpGal")
	var inputUsGal = document.getElementById("inputUsGal")
	var inputImpQuart = document.getElementById("inputImpQuart")
	var inputUsQuart = document.getElementById("inputUsQuart")
	var inputImpPint = document.getElementById("inputImpPint")
	var inputUsPint = document.getElementById("inputUsPint")
	var inputImpFluidOz = document.getElementById("inputImpFluidOz")
	var inputUsFluidOz = document.getElementById("inputUsFluidOz")
	if (source=="inputLiter") {
		inputMilliliter.value=(valNum*1000)
		inputImpGal.value=(valNum/4.546)
		inputImpFluidOz.value=(valNum*35.195)
		inputImpPint.value=(valNum*1.75975)
		inputImpQuart.value=(valNum*0.879877)
		inputUsFluidOz.value=(valNum*33.814)
		inputUsGal.value=(valNum*0.264172)
		inputUsPint.value=(valNum*2.11338)
		inputUsQuart.value=(valNum*1.05669)
	}
	if (source=="inputMilliliter") {
		inputLiter.value=(valNum/1000)
		inputImpGal.value=(valNum*0.000219969)
		inputImpFluidOz.value=(valNum/28.413)
		inputImpPint.value=(valNum*0.00175975)
		inputImpQuart.value=(valNum*0.000879877)
		inputUsFluidOz.value=(valNum*0.033814)
		inputUsGal.value=(valNum*0.000264172)
		inputUsPint.value=(valNum*.00211338)
		inputUsQuart.value=(valNum*0.00105669)
	}
	if (source=="inputImpGal") {
		inputLiter.value=(valNum*4.546)
		inputMilliliter.value=(valNum*4546)
		inputImpFluidOz.value=(valNum*160)
		inputImpPint.value=(valNum*8)
		inputImpQuart.value=(valNum*4)
		inputUsFluidOz.value=(valNum*153.722)
		inputUsGal.value=(valNum*1.201)
		inputUsPint.value=(valNum*9.6076)
		inputUsQuart.value=(valNum*4.8038)
	}
	if (source=="inputImpQuart") {
		inputLiter.value=(valNum*1.13652)
		inputImpGal.value=(valNum/4)
		inputImpFluidOz.value=(valNum*40)
		inputImpPint.value=(valNum*2)
		inputMilliliter.value=(valNum*1136.52)
		inputUsFluidOz.value=(valNum*38.4304)
		inputUsGal.value=(valNum*0.300237)
		inputUsPint.value=(valNum*2.402)
		inputUsQuart.value=(valNum*1.201)
	}
	if (source=="inputImpPint") {
		inputLiter.value=(valNum*0.568261)
		inputImpGal.value=(valNum/8)
		inputImpFluidOz.value=(valNum*20)
		inputMilliliter.value=(valNum*568.261)
		inputImpQuart.value=(valNum/2)
		inputUsFluidOz.value=(valNum*19.2152)
		inputUsGal.value=(valNum*0.150119)
		inputUsPint.value=(valNum*1.201)
		inputUsQuart.value=(valNum*0.600475)
	}
	if (source=="inputImpFluidOz") {
		inputLiter.value=(valNum/35.195)
		inputImpGal.value=(valNum/160)
		inputMilliliter.value=(valNum*28.4131)
		inputImpPint.value=(valNum/20)
		inputImpQuart.value=(valNum/40)
		inputUsFluidOz.value=(valNum*0.96076)
		inputUsGal.value=(valNum*0.0075094)
		inputUsPint.value=(valNum*.0600475)
		inputUsQuart.value=(valNum/33.307)
	}
	if (source=="inputUsGal") {
		inputLiter.value=(valNum*3.78541)
		inputImpGal.value=(valNum/1.201)
		inputMilliliter.value=(valNum*3785.41)
		inputImpPint.value=(valNum*6.66139)
		inputImpQuart.value=(valNum*3.3307)
		inputUsFluidOz.value=(valNum*128)
		inputImpFluidOz.value=(valNum*133.228)
		inputUsPint.value=(valNum*8)
		inputUsQuart.value=(valNum*4)
	}
	if (source=="inputUsQuart") {
		inputLiter.value=(valNum*0.946353)
		inputImpGal.value=(valNum*0.208169)
		inputMilliliter.value=(valNum*946.353)
		inputImpPint.value=(valNum*1.66535)
		inputImpQuart.value=(valNum/1.201)
		inputUsFluidOz.value=(valNum*32)
		inputUsGal.value=(valNum/4)
		inputUsPint.value=(valNum*2)
		inputImpFluidOz.value=(valNum*33.307)
	}
	if (source=="inputUsPint") {
		inputLiter.value=(valNum*0.473176)
		inputImpGal.value=(valNum*0.104084)
		inputMilliliter.value=(valNum*473.176)
		inputImpPint.value=(valNum/1.201)
		inputImpQuart.value=(valNum/2.402)
		inputUsFluidOz.value=(valNum*16)
		inputUsGal.value=(valNum/8)
		inputImpFluidOz.value=(valNum*16.6535)
		inputUsQuart.value=(valNum/2)
	}
	if (source=="inputUsFluidOz") {
		inputLiter.value=(valNum/33.814)
		inputImpGal.value=(valNum*0.00650527)
		inputMilliliter.value=(valNum*29.5735)
		inputImpPint.value=(valNum*0.0520421)
		inputImpQuart.value=(valNum*0.0260211)
		inputImpFluidOz.value=(valNum*1.04084)
		inputUsGal.value=(valNum/128)
		inputUsPint.value=(valNum/16)
		inputUsQuart.value=(valNum/32)
	}
}
function convertTime(source,valNum) {
	valNum = parseFloat(valNum)
	var inputSecond = document.getElementById("inputSecond")
	var inputMillisecond = document.getElementById("inputMillisecond")
	var inputMinute = document.getElementById("inputMinute")
	var inputHour = document.getElementById("inputHour")
	if (source=="inputSecond") {
		inputMillisecond.value=(valNum*1000)
		inputMinute.value=(valNum/60)
		inputHour.value=(valNum/3600)
	}
	if (source=="inputMillisecond") {
		inputSecond.value=(valNum/1000)
		inputMinute.value=(valNum/60000)
		inputHour.value=(valNum/3.6e+6)
	}
	if (source=="inputMinute") {
		inputMillisecond.value=(valNum*60000)
		inputSecond.value=(valNum*60)
		inputHour.value=(valNum/60)
	}
	if (source=="inputHour") {
		inputMillisecond.value=(valNum*3.6e+6)
		inputMinute.value=(valNum*60)
		inputSecond.value=(valNum*3600)
	}
}