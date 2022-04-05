--- Questão 1
SELECT aluno.Nome, professor.nome
    FROM aluno
        JOIN aluno_turma ON  aluno.id =  aluno_turma.aluno_id 
        JOIN turma ON aluno_turma.turma_id = turma.id
        JOIN professor ON turma.professor_id = professor.id
    WHERE professor = 'JOAO PEDRO'


--- Questão 2
SELECT turma.dia_da_semana, disciplina.nome
    FROM turma
        JOIN disciplina ON turma.disciplina_id = disciplina.id   
    WHERE disciplina.nome = 'MATEMATICA'


--- Questão 3
SELECT aluno
    FROM aluno_turma
        JOIN aluno ON (aluno_turma.aluno_id = aluno.id)
        JOIN turma ON (aluno_turma.turma = turma.id)
    WHERE turma.disciplina LIKE 'MATEMATICA'
        AND turma.disciplina LIKE 'FISICA';


--- Questão 4
SELECT disciplina
    FROM turma
        JOIN disciplina ON (turma.disciplina = disciplina.id)
    WHERE turma.disciplina_id IS null;
    

--- Questão 5
SELECT aluno
    FROM aluno_turma
        JOIN aluno ON (aluno_turma.aluno_id = aluno.id)
        JOIN turma ON (aluno_turma.turma = turma.id)
    WHERE turma.disciplina LIKE 'MATEMATICA'
        AND turma.disciplina NOT LIKE 'QUIMICA';





