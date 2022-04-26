Awords = 'aahed8 aalii6 aargh9 abaca11 abaci11 aback15 abaft11 abaka12 abamp14 abase8 abash10 abate8 abbas11 abbes11 abbey13 abbot11 abeam11 abele9 abets8 abhor10 abide9 abler9 ables9 abmho13 abode9'

from string import digits

remover = str.maketrans('', '', digits)
reswords = Awords.translate(remover)
wordlist = reswords.replace(' ','\n')

print(wordlist)