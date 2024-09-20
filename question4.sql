# Buscar os Clientes de São Paulo com seus Telefones

SELECT c.id_cliente, c.razao_social, t.numero
FROM cliente c
JOIN estado e ON c.estado_id = e.id_estado
JOIN telefone t ON c.id_cliente = t.cliente_id
WHERE e.sigla = 'SP';
