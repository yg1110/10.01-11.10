P(X | Y) = P(X, Y) / P(Y)
P(X, Y) = P(X | Y) * P(Y)

P(X=a, Y=b, Z=c) = P(X=a|Y=b,Z=c)P(Y=b|Z=c)P(Z=c)

조건부 결합분포의 분해
P(X, Y | Z) = P(X | Y, Z)P(Y | Z)
P(X = a, Y = b | Z = c) = P(X = a | Y = b | Z = c)P( Y = b | Z = c)

P(U = u, V = v, W = w, X = x | Y = y, Z = z)
= P(U = u, V = v | W = w, X = x, Y = y, Z = z)
*P(W = w | X = x, Y = y, Z = z)P(X = x | Y = y, Z = z)

우변 = P(U = u, V = v | W = w, X = x, Y = y, Z = z)P(W = w, X = x | Y = y, Z = z)
= P(U = u, V = v, W = w, X = x | Y = y, Z = z) = 좌변
