import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Maria", 56438764321)
const cliente2 = new Cliente("Ana", 308765433876)
new ContaCorrente(1304, "Mario")
new ContaCorrente(1895, "Vania")
new ContaCorrente(1455, "Pedro")
new ContaCorrente(195, "Luiza")
new ContaCorrente(135, "Carolina")

const contaCorrenteMaria = new ContaCorrente(1001, cliente1);
contaCorrenteMaria.depositar(90)

const contaCorrenteAna = new ContaCorrente(1654, cliente2);
contaCorrenteAna.depositar(900)
contaCorrenteAna.depositar(-34)
contaCorrenteAna.depositar(780)

contaCorrenteMaria.transferir(30, contaCorrenteAna)
contaCorrenteMaria.transferir(6, contaCorrenteAna)

const valorSacado = contaCorrenteMaria.sacar(40)
const valorSacado1 = contaCorrenteAna.sacar(16)

console.log(contaCorrenteMaria, valorSacado)
console.log(contaCorrenteAna, valorSacado1)

console.log(ContaCorrente.numeroDeContas)












