// questions.js - Seguridad Social - Todas las preguntas

// ============================================
// TEST 1: Preguntas tipo examen (1-64)
// ============================================
const TEST_QUESTIONS = [
    {q:"¿Quién presta la asistencia sanitaria en una contingencia común?", o:["a) El INSS","b) El servicio Público de Salud","c) El servicio público de salud o la mutua si tiene asociada la empresa estas contingencias"], ans:"b"},
    {q:"¿Quién presta la asistencia sanitaria en el caso de las contingencias profesionales?", o:["a) Solo las mutuas","b) Las mutuas o el INSS en función de quien tenga asociadas las CP","c) Las Mutuas o el SPS en el caso de que la empresa tenga las CP con el INSS"], ans:"c"},
    {q:"La prestación farmacéutica", o:["a) Será siempre gratuita","b) Siempre habrá abono parcial por parte del asegurado, pensionista y/o beneficiario","c) Será gratuita la hospitalaria, la derivada de Contingencias Profesionales, perceptores de prestaciones no contributivas, síndrome tóxico y quienes hayan perdido el derecho a percibir subsidio de desempleo","d) En los casos de asegurados y beneficiarios habrá una aportación entre el 60%-40% y en los pensionistas un 10% con límite mensual (8-60€)"], ans:"c"},
    {q:"Para acceder a la protección a la Dependencia establecida en la Ley 39/2006", o:["a) No se exige residencia en territorio español","b) Se exige un año de residencia en territorio español","c) Se exige residencia en territorio español durante 5 años de los que dos deben ser inmediatamente anteriores a la solicitud","d) Es requisito indispensable tener nacionalidad española"], ans:"c"},
    {q:"Las contingencias profesionales", o:["a) El accidente de trabajo, la enfermedad profesional y la enfermedad relacionada con el trabajo","b) El accidente no laboral","c) Las prestaciones de riesgo durante el embarazo y lactancia y el cuidado de menores con enfermedad grave","d) La a y la c son correctas"], ans:"d"},
    {q:"Las lesiones que ocurren durante el tiempo y en el lugar del trabajo", o:["a) Para ser consideradas A.T deberá demostrarse que se han producido con ocasión o por consecuencia del trabajo","b) En todos los regímenes, se presumirán que son AT y deberá demostrarse lo contrario por parte de la Entidad Gestora/Colaboradora","c) En el trabajo por cuenta ajena, se presumirán que son A.T y deberá demostrarse lo contrario por parte de la Entidad Gestora/Colaboradora, en el trabajo por cuenta propia no existe esta presunción"], ans:"c"},
    {q:"Los elementos que deben considerarse para calificar el accidente como laboral in itinere son:", o:["a) Que ocurran una hora antes o después de entrar a trabajar","b) Teleológico (motivo del desplazamiento), cronológico, topográfico y modal","c) Los detallados en el artículo 156 de la LGSS"], ans:"b"},
    {q:"Ir en dirección contraria en una calle para atajar yendo a trabajar ¿?", o:["a) Impide su calificación como accidente laboral in itinere por considerarse imprudencia temeraria","b) No impide su calificación como accidente laboral in itinere nunca","c) No impide su calificación como accidente laboral in itinere si cumple con los 4 elementos y no se considera imprudencia temeraria"], ans:"a"},
    {q:"La enfermedad profesional", o:["a) Es aquella que se acredita y demuestra que se ha provocado por el trabajo","b) Es la contraída en las actividades especificadas en el cuadro de enfermedades aprobado y provocada por los elementos o sustancias que se indican para cada enfermedad","c) Es la contraída en las actividades especificadas en el cuadro de enfermedades aprobado y provocada por los elementos o sustancias que se indican para cada enfermedad; hay dos grupos de enfermedades, las relacionadas en el Anexo I que siempre se presumen E.P y las relacionadas en Anexo II cuyo origen laboral se sospecha y hay que acreditar"], ans:"c"},
    {q:"La declaración de Enfermedades profesionales le corresponde:", o:["a) A la empresa rellenando el parte Delt@ correspondiente","b) Le corresponde exclusivamente al INSS","c) Le corresponde al INSS o al SPS correspondiente","d) Le corresponde a la Entidad Gestora o colaboradora que protejan las CP"], ans:"d"},
    {q:"Las mutuas", o:["a) Son entidades públicas que gestionan prestaciones de Seguridad Social","b) Son entidades privadas que colaboran en la gestión de las prestaciones de seguridad social con ánimo de lucro y plena autonomía gestora","c) Son entidades privadas que colaboran en la gestión de las prestaciones de seguridad social sin ánimo de lucro y bajo la dirección y tutela del Ministerio de Inclusión y Seguridad Social","d) Son entidades públicas que colaboran en la gestión de las prestaciones de seguridad social sin ánimo de lucro y bajo la dirección y tutela del Ministerio de Inclusión y Seguridad Social"], ans:"c"},
    {q:"Las mutuas, en el marco de la colaboración en la gestión de la Seguridad Social", o:["a) Gestionan prestaciones de asistencia social para trabajadores que tengan una situación de necesidad derivada de contingencias comunes","b) Gestionan prestaciones de asistencia social para trabajadores que tengan una situación de necesidad derivada de contingencias profesionales","c) No gestionan prestaciones de asistencia social en ningún caso ya que la gestión de la asistencia social es competencia de las CC.AA"], ans:"b"},
    {q:"Son recursos de financiación del Sistema de Seguridad Social", o:["a) Las cotizaciones sociales","b) Las aportaciones del Estado vía PGE","c) Los ingresos procedentes de recargos y sanciones y los frutos, rentas e intereses del patrimonio","d) Todas las respuestas son correctas"], ans:"d"},
    {q:"Las prestaciones de asistencia sanitaria y servicios sociales", o:["a) Tienen naturaleza contributiva y se financian con cotizaciones","b) Tienen naturaleza no contributiva y se financian con impuestos en los casos derivados de Contingencias Profesionales","c) Tienen naturaleza no contributiva y se financian con impuestos salvo en los casos derivados de Contingencias Profesionales","d) A y B son correctas"], ans:"c"},
    {q:"El sistema financiero de la Seguridad Social española", o:["a) Es exclusivamente el de reparto simple según el art. 110 LGSS","b) Es el de capitalización individual según el art. 100 LGSS","c) Es el de reparto de capitales de cobertura en las pensiones sea cual sea la contingencia","d) Es el de reparto simple según el art. 110 LGSS y el de reparto de capitales de cobertura en las pensiones derivadas de Contingencias Profesionales"], ans:"d"},
    {q:"Serán sujetos obligados a cotizar", o:["a) Las empresas y los trabajadores siempre","b) Las empresas y trabajadores en Contingencias Profesionales y solo las empresas en Contingencias Comunes","c) Las empresas y trabajadores en Contingencias Comunes y solo las empresas en Contingencias Profesionales","d) Las empresas en Contingencias Profesionales y empresas y trabajadores en Contingencias Comunes y para la aportación al Mecanismo de Equidad Intergeneracional"], ans:"d"},
    {q:"Son entidades gestoras de prestaciones económicas", o:["a) El INSS","b) El INSS, el ISM y las MCSS","c) El INSS, el ISM, las MCSS, el SEPE y los Servicios Sociales de las CCAA","d) El INSS, el ISM, las MCSS, el SEPE y los Servicios Públicos de Salud y Servicios Sociales de las CCAA"], ans:"c"},
    {q:"La entidad responsable de gestión de la afiliación del Sistema de la Seguridad Social es:", o:["a) El INSS","b) El INSS o el ISM para el RE del mar","c) La TGSS"], ans:"c"},
    {q:"¿Qué ocurre si tras la regularización de la TGSS se descubre que la base provisional elegida por el autónomo fue inferior a la mínima del tramo de sus rendimientos reales?", o:["a) La diferencia se compensará únicamente en la jubilación","b) El autónomo pierde el derecho a cualquier prestación al tener deuda","c) La TGSS reclamará el ingreso de las diferencias sin intereses de demora si se ingresan en plazo","d) La TGSS reclamará el ingreso de las diferencias con 20% de recargo al realizarse fuera de plazo la cotización complementaria de la diferencia"], ans:"c"},
    {q:"¿Qué ocurre si tras la regularización de la TGSS se descubre que la base provisional elegida por el autónomo fue superior a la máxima del tramo de sus rendimientos reales?", o:["a) La diferencia se destina a la hucha de las pensiones","b) El autónomo debe solicitar la devolución del exceso de cotización","c) La TGSS devolverá de oficio el exceso de cotización","d) La TGSS reclamará el ingreso de las diferencias con 20% de recargo al realizarse fuera de plazo la cotización complementaria de la diferencia"], ans:"c"},
    {q:"Las empresas cumplen con la obligación de cotización a través de:", o:["a) Sistema Delt@","b) Sistema CEPROSS","c) Sistema de Liquidación Directa"], ans:"c"},
    {q:"No respetar el límite de velocidad en un accidente yendo a trabajar", o:["a) Impide su calificación como accidente laboral in itinere por ser una imprudencia","b) No impide su calificación como accidente laboral in itinere nunca","c) No impide su calificación como accidente laboral in itinere si cumple con los 4 elementos y no se considera imprudencia temeraria"], ans:"c"},
    {q:"La edad máxima para percibir la prestación contributiva de orfandad será:", o:["a) 21 años","b) 25 años si no trabaja o tiene ingresos inferiores al SMI","c) Sin límite de edad en el caso de Incapacitados Permanentes absolutos o Grandes Inválidos","d) Todas son correctas"], ans:"d"},
    {q:"La cuantía de la prestación contributiva de viudedad será", o:["a) 52% de la Base Reguladora","b) 60% si tiene más de 65 años; no tiene otra prestación ni trabaja ni tiene ingresos superiores al límite para percibir pensión mínima","c) Será del 70% sobre base reguladora, si: durante percepción de la pensión el pensionista tiene cargas familiares (hijos menores de 26 años o discapacitados); o que la pensión de viudedad constituya principal o única fuente de ingresos y los ingresos de la unidad familiar divididos por sus miembros no superen el 70% del SMI y que los rendimientos del pensionista no superen el importe equivalente al límite para tener derecho a complemento por mínimos","d) Todas son correctas"], ans:"d"},
    {q:"La cuantía de la prestación contributiva de orfandad será", o:["a) 20% de la Base Reguladora de viudedad","b) Si es orfandad absoluta, el 20% se incrementa con el 52% de la viudedad","c) Si hay varios huérfanos, el 52% se distribuye a partes iguales","d) Todas son correctas"], ans:"d"},
    {q:"La base reguladora de la prestación contributiva de viudedad será", o:["a) Si el fallecimiento es derivado de contingencias Profesionales, será el resultado de dividir las Bases de Cotización del año anterior entre 12","b) Será el resultado de la suma de las Bases de Cotización de 24 meses ininterrumpidos dentro de 15 últimos años dividido entre 28, en ambas contingencias","c) A y d son correctas","d) Si el fallecimiento es derivado de Contingencias Comunes, será el resultado de la suma de las Bases de Cotización de 24 meses ininterrumpidos dentro de 15 últimos años dividido entre 28"], ans:"c"},
    {q:"¿Qué prestaciones de Seguridad Social puede generar la muerte?", o:["a) Auxilio por defunción y prestaciones de viudedad","b) Prestación de orfandad","c) Prestaciones en favor de familiares","d) Todas son correctas"], ans:"d"},
    {q:"¿Se exige cotización previa para causar derecho a las prestaciones causadas por muerte?", o:["a) No, con carácter general","b) No cuando son causadas por Contingencias Profesionales","c) En enfermedad Común se exigen 500 días en los 5 años anteriores y si el fallecido no estaba en alta o situación asimilada: debe haber tenido 15 años de cotización para causar prestaciones","d) Son correctas la b y la c"], ans:"d"},
    {q:"¿Existe compatibilidad de la pensión de jubilación con el trabajo?", o:["a) Sí, con carácter general","b) No hay ninguna opción de compatibilizar la pensión de jubilación con el de trabajo","c) Ninguna es correcta","d) Es compatible con el trabajo del pensionista cuando haya cumplido la edad ordinaria y haya alcanzado el 100% de la pensión"], ans:"d"},
    {q:"Si te jubilas después de la edad ordinaria", o:["a) La cuantía de tu pensión no varía","b) La cuantía de la pensión se reducirá 2% anual con menos de 25 años cotizados, un 2,75% entre 25 y 37 años cotizados, y 4% a partir de 37 años cotizados","c) La cuantía de la pensión se incrementará 2% anual con menos de 25 años cotizados, un 2,75% entre 25 y 37 años cotizados, y 4% a partir de 37 años cotizados","d) La cuantía de la pensión se incrementará un 3% anual"], ans:"c"},
    {q:"En el cálculo de la pensión contributiva de jubilación el % a aplicar a la Base Reguladora será", o:["a) Con 15 años cotizados el 50%, cada mes adicional entre 1 y 49, el 0,21%, por los 209 siguientes el 0,19%","b) Con 10 años cotizados el 50%, cada mes adicional entre 1 y 106, el 0,21%, por los 146 siguientes el 0,19%","c) Con 20 años cotizados el 50%, cada mes adicional entre 1 y 106, el 0,21%, por los 146 siguientes el 0,19%","d) Con 18 años cotizados el 50%, cada mes adicional entre 1 y 106, el 0,21%, por los 146 siguientes el 0,19%"], ans:"a"},
    {q:"La jubilación parcial después de cumplir la edad ordinaria exigida para la jubilación necesita contrato de relevo", o:["a) Verdadero","b) Falso"], ans:"b"},
    {q:"Si un trabajador ha estado de alta en el Régimen general y en el régimen Especial de Trabajadores Autónomos, de cara a la jubilación", o:["a) Se tomará en cuenta lo cotizado en el Régimen General ya que solo puede jubilarse por un régimen","b) Se tomará en cuenta lo cotizado en el Régimen al que más haya cotizado ya que solo puede jubilarse por un régimen","c) Se sumará lo cotizado en ambos para el cálculo de una única pensión","d) Se considerará independientemente lo cotizado en cada régimen y podrá, en su caso, causar dos pensiones"], ans:"d"},
    {q:"La jubilación antes de la edad ordinaria", o:["a) Es posible, en determinadas situaciones, sin reducción de la prestación","b) Es posible con reducción de la prestación, siendo ésta distinta si la jubilación es voluntaria o involuntaria","c) No es posible en España","d) A y B son correctas"], ans:"d"},
    {q:"La edad ordinaria de jubilación en 2026 es:", o:["a) 65 años","b) 67 años","c) 65 años y 10 meses o 65 años si has cotizado más de 35 años","d) 66 años y 10 meses o 65 años si has cotizado más de 38 años y 3 meses"], ans:"d"},
    {q:"La base reguladora de la prestación de jubilación contributiva en 2024 será el resultado de dividir", o:["a) 276 Bases de cotización anteriores al hecho causante entre 322","b) 300 Bases de cotización anteriores al hecho causante entre 350","c) 256 Bases de cotización anteriores al hecho causante entre 222","d) 180 Bases de cotización anteriores al hecho causante entre 210"], ans:"b"},
    {q:"Para tener acceso a la prestación de invalidez no contributiva el límite de rentas será", o:["a) El salario Mínimo interprofesional","b) El IPREM","c) El importe de la pensión aprobado para cada año, incrementado un 70% por cada miembro de la Unidad Económica de Convivencia y si vive con ascendientes o descendientes de primer grado se multiplica por 2,5 el límite","d) No hay límite de rentas"], ans:"c"},
    {q:"El periodo mínimo de cotización exigido para la jubilación contributiva es", o:["a) 5 años en los 15 años anteriores al hecho causante","b) Tener cubierto periodo mínimo cotización de 15 años, al menos 2 dentro de los 15 inmediatamente anteriores al hecho causante","c) Tener cubierto periodo mínimo cotización de 15 años, al menos 5 dentro de los 15 inmediatamente anteriores al hecho causante","d) Tener cubierto periodo mínimo cotización de 10 años, al menos 2 dentro de los 12 inmediatamente anteriores al hecho causante"], ans:"b"},
    {q:"La prestación económica de la gran invalidez será", o:["a) El 100% de la Base Reguladora","b) El 150% de la Base Reguladora","c) La pensión correspondiente a la incapacidad permanente absoluta, más un complemento (45% de la base mínima de cotización + 30% de su última base de cotización. Garantizando el 45% del importe de la pensión)","d) La pensión correspondiente a la incapacidad permanente absoluta, más un complemento (el 45% del importe de la pensión)"], ans:"c"},
    {q:"La base reguladora para el cálculo de la prestación de incapacidad permanente total, absoluta y gran invalidez derivadas de enfermedad común", o:["a) Será la misma Base reguladora que la de la prestación de incapacidad temporal","b) Será el resultado de dividir por 100, las 50 bases reguladoras anteriores al hecho causante","c) Será el resultado de dividir por 120, las 96 bases reguladoras anteriores al hecho causante","d) Será el resultado de dividir por 112, las 96 bases reguladoras anteriores al hecho causante"], ans:"d"},
    {q:"La base reguladora para el cálculo de la prestación de incapacidad permanente total, absoluta y gran invalidez derivada de accidente no laboral", o:["a) Será la misma Base Reguladora que la de la prestación de incapacidad temporal","b) Será el resultado de dividir Bases de Cotización de 24 meses consecutivos dentro de los 7 años inmediatamente anteriores (sin cubrir lagunas) por 28","c) Será el resultado de dividir Bases de Cotización de 36 meses consecutivos dentro de los 6 años inmediatamente anteriores (sin cubrir lagunas) por 28","d) Será la misma Base reguladora que para la incapacidad permanente derivada de enfermedad común al ser también contingencia común"], ans:"b"},
    {q:"Para la prestación de incapacidad permanente absoluta se exige un periodo mínimo de cotización, estando de alta o situación asimilada al alta:", o:["a) De 1800 días en los 10 años anteriores al hecho causante en ambas contingencias","b) ¼ tiempo entre 20 años y el hecho causante y mínimo 5 años y al menos 1/5 del periodo exigido en 10 años inmediatamente anteriores al hecho causante si es mayor de 31 años","c) Un tercio del tiempo entre los 16 años y la fecha del hecho causante si es menor de 31 años, solo si se trata de contingencias comunes","d) B y c son correctas"], ans:"d"},
    {q:"Para la prestación de incapacidad permanente parcial se exige un periodo mínimo de cotización:", o:["a) De 1800 días en los 10 años anteriores al hecho causante en ambas contingencias","b) De 180 días en los 5 años anteriores al hecho causante","c) De 1800 días en los 10 años anteriores al hecho causante cuando esté causada por una contingencia común","d) Un tercio del tiempo entre los 16 años y la fecha del hecho causante es menor de 31 años"], ans:"c"},
    {q:"La cuantía de la prestación por incapacidad permanente parcial será", o:["a) De una pensión del 55% de la Base Reguladora","b) 36 mensualidades de la Base Reguladora de la incapacidad temporal","c) 24 mensualidades de la Base Reguladora de la incapacidad temporal","d) De una pensión del 75% de la base reguladora"], ans:"c"},
    {q:"Los distintos grados de la incapacidad permanente son", o:["a) La incapacidad permanente total y la incapacidad permanente absoluta","b) La incapacidad permanente parcial, la incapacidad permanente total y la incapacidad permanente absoluta","c) Las lesiones permanentes no invalidantes (sólo en contingencias profesionales) y, en ambas contingencias: la incapacidad permanente parcial, la incapacidad permanente total, la incapacidad permanente absoluta y la Gran invalidez","d) La incapacidad permanente parcial, la incapacidad permanente total, la incapacidad permanente absoluta y la Gran invalidez"], ans:"c"},
    {q:"Para estar ante una situación de incapacidad permanente:", o:["a) Debe existir una disminución de la capacidad laboral","b) Debe darse una alteración grave de la salud con carácter permanente y haberse agotado las posibilidades terapéuticas","c) A corto plazo no existe posibilidad de recuperación, aunque la posibilidad de recuperación, incierta, no impide calificación","d) Todas son correctas"], ans:"d"},
    {q:"La incapacidad permanente parcial", o:["a) Es aquella que incapacita para gran parte de las profesiones","b) Es aquella que incapacita para ejercer la profesión habitual","c) Es aquella que, sin impedir la realización de las tareas fundamentales del puesto o profesión, afecta, al menos al 33% de su rendimiento","d) Es aquella en la que puedes hacer parte de tus tareas aunque afecte aquellas consideradas esenciales para el puesto"], ans:"c"},
    {q:"Las situaciones determinantes de incapacidad permanente es aquella situación del trabajador que, después de haber estado sometido al tratamiento prescrito y de haber sido dado de alta médicamente, presenta reducciones anatómicas o funcionales graves, susceptibles de determinación objetiva y previsiblemente definitivas, aunque no disminuyan o anulen su capacidad laboral", o:["a) Verdadero","b) Falso"], ans:"b"},
    {q:"El derecho a la asistencia sanitaria pública", o:["a) Es un derecho constitucional","b) Es un derecho transferido a las CCAA y cada una determinará su alcance","c) Es un derecho reconocido por primera vez en la Ley General de Sanidad de 1986","d) Existe el derecho a la asistencia sanitaria pero no tiene por qué ser pública"], ans:"a"},
    {q:"¿Qué periodo mínimo de cotización debe acreditar el autónomo para acceder a la protección por cese de actividad?", o:["a) Mínimo de 12 meses de cotización por desempleo dentro de los 24 meses anteriores","b) Mínimo de 12 meses de cotización por cese de actividad dentro de los 24 meses anteriores","c) Mínimo de 24 meses de cotización por contingencias comunes dentro de los 48 meses anteriores","d) Mínimo de 180 días de cotización por cese de actividad dentro de los 5 años anteriores"], ans:"b"},
    {q:"¿Cómo se calcula la cuantía del Ingreso Mínimo Vital a recibir por el beneficiario?", o:["a) Es una cuantía fija mensual idéntica para todos (75% IPREM)","b) Es el resultado de multiplicar el SMI por el número de miembros que conforme la Unidad Económica de convivencia","c) Es la diferencia exacta entre el umbral de renta garantizada aplicable y los ingresos computables del hogar","d) Es el resultado de multiplicar el IPREM por el número de miembros que conforme la Unidad Económica de Convivencia"], ans:"c"},
    {q:"Según la Ley, ¿cuál es el objetivo principal de la creación del IMV?", o:["a) Sustituir la prestación no contributiva de desempleo","b) Prevenir el riesgo de pobreza y exclusión social de personas en situación de vulnerabilidad","c) Garantizar una prestación de cuantía fija para todos los españoles","d) Crear una prestación de asistencia social de cuantía fija que gestionen los servicios sociales autonómicos"], ans:"b"},
    {q:"¿Cómo norma general, qué requisito de residencia legal y efectiva en España se exige para acceder al IMV?", o:["a) Haber residido de manera ininterrumpida 6 meses anteriores a la solicitud","b) Haber residido de manera ininterrumpida 12 meses anteriores a la solicitud","c) Acreditar residencia legal en España de 5 años de los cuales uno inmediatamente anterior"], ans:"b"},
    {q:"¿Cuáles de las siguientes prestaciones no son prestaciones a largo plazo?", o:["a) Las prestaciones de viudedad y orfandad","b) Las prestaciones por desempleo","c) Las prestaciones de jubilación","d) Las prestaciones de incapacidad"], ans:"b"},
    {q:"¿La pensión por incapacidad permanente total es compatible con el trabajo?", o:["a) Sí, incluso con el de la profesión habitual si lo autoriza el INSS","b) Compatible con otro trabajo diferente (que las funciones coincidan) en la misma u otra empresa, que deberá comunicarse al INSS","c) Compatible con otro trabajo diferente (que las funciones no coincidan) en la misma u otra empresa, que deberá autorizarse siempre por el INSS","d) Compatible con otro trabajo diferente (que las funciones no coincidan) en la misma u otra empresa, que deberá comunicarse al INSS, salvo en el caso de Enfermedad Profesional, en cuyo caso el INSS deberá autorizar"], ans:"d"},
    {q:"El derecho a la elección de médico", o:["a) Tendrá la configuración y alcance, si existe, según lo que establezcan los correspondientes Servicios Públicos de Salud de las CCAA","b) Es un derecho reconocido en la Ley General de Sanidad de 1986 que todas las CCAA deben respetar","c) Sólo existe en la Comunidad de Madrid y País Vasco","d) No está reconocido en la norma"], ans:"b"},
    {q:"El sistema nacional de salud", o:["a) Se gestiona por el INSALUD exclusivamente","b) Se coordina a través del Consejo Intergeneracional y se organiza a través de los Servicios Públicos de Salud de las CCAA que territorialmente deciden como organizarse","c) Se coordina a través del Consejo Interterritorial y se organiza a través de los servicios públicos de salud de las CCAA que territorialmente se dividen en demarcaciones llamadas áreas de salud"], ans:"c"},
    {q:"Los servicios sociales:", o:["a) Son competencias de las CCAA y no forman parte de la acción protectora de la seguridad Social","b) Son competencia de las CCAA y forman parte de la acción protectora de la Seguridad Social","c) Principalmente serán prestaciones de formación y rehabilitación de personas con discapacidad y de asistencia a personas mayores","d) B y C son correctas"], ans:"d"},
    {q:"La financiación de la Seguridad Social", o:["a) Se nutrirá exclusivamente de los impuestos","b) Se nutrirá exclusivamente de los recursos de la Seguridad Social obtenido a través de las cotizaciones","c) Se nutrirá básicamente de las cotizaciones para las prestaciones contributivas y de los impuestos para las prestaciones no contributivas","d) Ninguna es correcta"], ans:"c"},
    {q:"La prestación contributiva de desempleo requiere una carencia de", o:["a) 180 días en los 5 años anteriores","b) 300 días en los 5 años anteriores","c) 360 días en los 6 años anteriores","d) 600 días en los 6 años anteriores"], ans:"c"},
    {q:"La cuantía de la prestación no contributiva de desempleo para menores de 45 años será", o:["a) Del 100% del IPREM","b) Del 70% del IPREM","c) Del 60% del IPREM","d) Del 80% del IPREM"], ans:"d"},
    {q:"La prestación contributiva de desempleo puede durar un máximo de", o:["a) 365 días","b) 545 días","c) 730 días","d) 720 días"], ans:"d"},
    {q:"La protección por desempleo", o:["a) Tiene por objeto proteger a los trabajadores que se despiden y no quieren ni pueden trabajar","b) Tiene por objeto proteger a los trabajadores que queriendo y pudiendo trabajar pierden su trabajo o ven reducida su jornada","c) Tiene un nivel contributivo y otro no contributivo","d) La b y la c son correctas"], ans:"d"},
    {q:"El presupuesto de las mutuas forma parte del presupuesto de la Seguridad Social", o:["a) Sí","b) No"], ans:"a"},
];

// ============================================
// CASOS JURISPRUDENCIALES - ¿Es accidente de trabajo?
// ============================================
const CASOS_JURIS = [
    {
        id: 1,
        titulo: "Caso del garaje del chalet",
        descripcion: "Un trabajador se dirige al trabajo y, cuando va a coger el coche en el garaje de su chalet, se escurre en las escaleras y se cae.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 2,
        titulo: "Caso de la notaría",
        descripcion: "Yendo a trabajar, el trabajador deja unos papeles en la notaría de la empresa y se accidenta al salir de la notaría.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 3,
        titulo: "Caso de trámite personal",
        descripcion: "Si va a firmar algo para tramitar asuntos personales.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 4,
        titulo: "Caso del autobús",
        descripcion: "Esperando al autobús en el que va al trabajo, le atropella un coche.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 5,
        titulo: "Caso del portal fregado",
        descripcion: "María sale de su piso para ir al trabajo y se escurre en el pasillo del portal porque el portero acababa de fregar el suelo.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 6,
        titulo: "Caso del regreso a casa",
        descripcion: "Luis tiene horario de 8 a 15:15, trabaja presencial, y de camino a su casa tiene un accidente.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 7,
        titulo: "Caso de la comida de trabajo",
        descripcion: "El jefe organiza una comida de trabajo y, al salir del restaurante, un trabajador se tuerce un tobillo y se lo fractura.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 8,
        titulo: "Caso de la cena de Navidad",
        descripcion: "El jefe organiza una cena de Navidad con copa y, al salir del restaurante, un trabajador se tuerce un tobillo y se lo fractura.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 9,
        titulo: "Caso del banco (José Luis)",
        descripcion: "José Luis, ingeniero de la empresa, va al banco a entregar documentación mandado por su jefe (al no estar el secretario), y le atropella una bicicleta.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 10,
        titulo: "Caso de la cocina en teletrabajo",
        descripcion: "Luis tiene horario de 8 a 15:15 y teletrabaja 4 días a la semana, incluidos los lunes. En el descanso del desayuno se escurre en la cocina de su casa y se fractura el pie.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 11,
        titulo: "Caso del ictus en teletrabajo",
        descripcion: "El mismo Luis, estando delante del ordenador a las 13:17, en teletrabajo, tiene un ictus grave y fallece.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 12,
        titulo: "Caso de la imprudencia temeraria",
        descripcion: "Un trabajador va ebrio al trabajo utilizando la ruta habitual.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 13,
        titulo: "Caso del andamio",
        descripcion: "En la obra, un trabajador utiliza el arnés de seguridad, se sube 8 pisos por el andamio, se escurre y se cae. Aunque haya tenido el curso correspondiente o se le haya indicado de forma reiterada las medidas de seguridad.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 14,
        titulo: "Caso de Antonio (infarto)",
        descripcion: "Antonio pesa 317 kg, fuma y bebe habitualmente, ha tenido 4 infartos previos, tiene un horario de 8 a 15 horas, y a las 11 —sin estar realizando ningún esfuerzo en la empresa ni estar sometido a estrés— le da un infarto y fallece.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: null
    },
    {
        id: 15,
        titulo: "Rafael – Teletrabajo y caída en el baño",
        descripcion: "Rafael trabaja para una empresa de seguros y teletrabaja 3 días a la semana. El lunes, estando teletrabajando, interrumpe el tiempo de trabajo para ir al baño y, al salir del mismo, se escurre, cae y se fractura la muñeca.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: "SJS 1 de Cáceres de 26 de octubre, núm. 297/2022"
    },
    {
        id: 16,
        titulo: "Atropello en tiempo de descanso",
        descripcion: "¿Se considera accidente de trabajo el atropello sufrido por un trabajador durante el tiempo de descanso cuando se dirigía a su vehículo situado en las inmediaciones del centro de trabajo con la intención de aparcarlo más cerca?",
        pregunta: "¿Es accidente de trabajo?",
        referencia: "Sentencia del Tribunal Supremo del 13 de octubre de 2021, núm. 1008/2021, Rec. 5042/2018"
    },
    {
        id: 17,
        titulo: "Caída en la ducha del hotel (formación)",
        descripcion: "¿Se considera accidente de trabajo la caída en la ducha del hotel donde una trabajadora está alojada para una formación convocada por la empresa?",
        pregunta: "¿Es accidente de trabajo?",
        referencia: "STS n.º 278/2023, de 18 de abril"
    },
    {
        id: 18,
        titulo: "Pedro Jesús – Desplome tras fichar",
        descripcion: "El 30 de junio de 2019, Pedro Jesús, tras finalizar su jornada de trabajo, una vez había fichado a las 6:17 horas a través del sistema de huella dactilar y vistiendo ropa de calle, se desplomó cayendo al suelo en las instalaciones de la empresa.",
        pregunta: "¿Es accidente de trabajo?",
        referencia: "Sentencia Social 3674/2022, TSJ Comunidad Valenciana, Sala de lo Social, Rec. 450/2022 de 29 de noviembre de 2022"
    },
    {
        id: 19,
        titulo: "Cocinero de buque en puerto de Senegal",
        descripcion: "Trabajador del Mar, cocinero de buque de 'merlucero' de Lugo que, estando atracado en un puerto de Senegal, en tiempo de descanso se accidenta en el buque.",
        pregunta: "¿Es accidente laboral?",
        referencia: "STS 24 feb 2014, Rec. 145/2013"
    },
];

// ============================================
// CASOS PRÁCTICOS DE CÁLCULO
// ============================================
const CASOS_PRACTICOS = [
    {
        id: 1,
        titulo: "Trabajador con osteosarcoma (IT + IP Total)",
        descripcion: "Un trabajador de 26 años (nacido el 20 de abril de 2000), en su primer trabajo después de acabar FP, es contratado (01/01/2026) como ascensorista. En el segundo mes de trabajo (baja médica 14/02/2026), cuando está en su domicilio, siente un dolor agudo en la pierna, ingresa de urgencias y es diagnosticado de osteosarcoma; le amputan una pierna, y acaba siendo calificado como Incapacitado Permanente Total el 25/05/2026. Durante el mes anterior a la baja, sus retribuciones fueron: un salario fijo mensual de 1.190€, con dos pagas extraordinarias de 30 días de salario cada una. Casado, con tres hijos menores y la única fuente de ingresos la pensión.",
        preguntas: [
            "Calcula la prestación de IT y de IP.",
            "¿Podría recibir alguna otra prestación?"
        ]
    },
    {
        id: 2,
        titulo: "Trabajador con Gran Invalidez (caída en obra)",
        descripcion: "Un trabajador de 26 años es contratado como ascensorista en una empresa de instalación y mantenimiento de ascensores. El segundo día de trabajo se cae en una obra por el hueco del ascensor desde más de 10 metros de altura. Tras 6 meses de baja médica, el INSS resuelve Incapacidad Permanente en grado de Gran Invalidez. En el momento del fallecimiento estaba casado y tenía 3 hijos. Sus ingresos eran los únicos derivados del trabajo en la unidad familiar y pagan una hipoteca de 900€. Durante el año anterior al accidente, sus retribuciones fueron: salario fijo mensual de 1.190€, dos pagas extraordinarias de 30 días de salario cada una, una paga de beneficios de 1.900€, y horas extraordinarias por importe de 1.500€. Casado, con tres hijos menores y la única fuente de ingresos la pensión.",
        preguntas: [
            "Calcula la prestación de IT y de IP-Gran Invalidez.",
            "¿Podría recibir alguna otra prestación?",
            "Y si el grado de IP fuera Total, ¿podría recibir alguna otra prestación?"
        ]
    },
    {
        id: 3,
        titulo: "Jubilación ordinaria (Luis)",
        descripcion: "Luis, a 26 de mayo de 2026, tiene 66 años y 38 años cotizados. La suma de las Bases de Cotización de los últimos 300 meses es 150.000€.",
        preguntas: [
            "¿Cuál es su fecha a partir de la cual podría acceder a la Jubilación ordinaria?",
            "Calcula su prestación de jubilación si se jubilase el 01/06/2026."
        ]
    },
    {
        id: 4,
        titulo: "Examen 05/06/2024 – Ejercicio 1 (Cotización)",
        descripcion: "Calcula la cotización por Contingencias Comunes, cuota patronal y cuota obrera, de un trabajador economista titulado superior que en el mes correspondiente ha cobrado 3.500€ de salario mensual y 3.500€ de una de las dos pagas extra anuales.",
        preguntas: [
            "¿Cuál sería su base mínima?",
            "Calcula la cotización por CC, cuota patronal y cuota obrera."
        ]
    },
    {
        id: 5,
        titulo: "Examen 05/06/2024 – Ejercicio 2 (IP + Jubilación)",
        descripcion: "Una trabajadora, nacida el 16 de enero de 1952, es declarada en situación de Incapacidad Permanente Total para la profesión habitual, derivada de enfermedad común, el 1 de mayo de 2010. En esa fecha, la suma de sus bases de cotización inmediatamente anteriores, computables para el cálculo de la prestación (una vez actualizadas), asciende a 132.000€ y acredita 34 años de cotización. El 1 de mayo del siguiente año comienza a trabajar nuevamente en una empresa y profesión distinta. El 15 de abril de 2023 solicita pensión de jubilación, siendo la suma de sus bases de cotización inmediatamente anteriores a esa fecha y computables para el cálculo de la prestación (una vez actualizadas) de 210.000€.",
        preguntas: [
            "Calcula la pensión de incapacidad permanente que generó en 2010.",
            "Cuando solicita la jubilación, ¿tiene la cotización exigida para la jubilación?",
            "¿Cuál es la base reguladora de jubilación?",
            "¿Y su prestación de jubilación?",
            "¿Cuándo podría haberse jubilado?"
        ]
    },
];
