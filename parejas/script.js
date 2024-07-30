document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.toUpperCase();
    const pitagoreanMap = {
        A: 1, J: 1, S: 1,
        B: 2, K: 2, T: 2,
        C: 3, L: 3, U: 3,
        D: 4, M: 4, V: 4,
        E: 5, N: 5, W: 5,
        F: 6, O: 6, X: 6,
        G: 7, P: 7, Y: 7,
        H: 8, Q: 8, Z: 8,
        I: 9, R: 9
    };

    let sum = 0;

    for (let char of fullName) {
        if (pitagoreanMap[char]) {
            sum += pitagoreanMap[char];
        }
    }

    const reducedNumber = reduceToOneOrMasterNumber(sum);
    document.getElementById('result').textContent = `El número reducido de ${fullName} es: ${reducedNumber}`;
    document.getElementById('relationshipMeaning').textContent = getRelationshipMeaning(reducedNumber);
});

function reduceToOneOrMasterNumber(num) {
    const masterNumbers = [11, 22, 33];
    while (num > 9 && !masterNumbers.includes(num)) {
        num = num.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return num;
}

function getRelationshipMeaning(num) {
    const meanings = {
        1: `Número 1
Características: Liderazgo, independencia, ambición, individualidad.
En pareja: Las personas con este número buscan liderazgo y autoridad en la relación. Pueden ser protectores y dedicados, pero también necesitan su espacio y libertad. Son apasionados y pueden impulsar a su pareja hacia el éxito.`,
        2: `Número 2
Características: Cooperación, sensibilidad, diplomacia, dualidad.
En pareja: Son extremadamente cariñosos y buscan armonía y paz en la relación. Prefieren la cooperación y el compromiso. Son buenos oyentes y valoran la conexión emocional profunda con su pareja.`,
        3: `Número 3
Características: Creatividad, comunicación, alegría, expresión.
En pareja: Les encanta socializar y tienen un gran sentido del humor, lo que hace que las relaciones con ellos sean divertidas y animadas. Buscan una pareja que pueda compartir y apreciar su creatividad y entusiasmo por la vida.`,
        4: `Número 4
Características: Estabilidad, organización, pragmatismo, lealtad.
En pareja: Son leales y confiables, buscando construir una base sólida y estable en la relación. Valoran la seguridad y la consistencia, y trabajan duro para mantener la relación fuerte y duradera.`,
        5: `Número 5
Características: Aventura, libertad, cambio, adaptabilidad.
En pareja: Son dinámicos y buscan emoción y variedad en sus relaciones. Necesitan una pareja que pueda aceptar y adaptarse a su necesidad de libertad y cambio. Valoran la independencia y pueden tener dificultades con la rutina.`,
        6: `Número 6
Características: Responsabilidad, servicio, amor, familia.
En pareja: Son extremadamente amorosos y buscan construir un hogar y una familia sólida. Son protectores y se preocupan profundamente por el bienestar de su pareja. Valoran la armonía y el equilibrio en la relación.`,
        7: `Número 7
Características: Intelecto, introspección, espiritualidad, análisis.
En pareja: Son profundos y buscan una conexión intelectual y espiritual en sus relaciones. Pueden ser reservados y necesitar tiempo a solas, pero son leales y comprometidos una vez que encuentran a la persona adecuada.`,
        8: `Número 8
Características: Poder, ambición, éxito, materialismo.
En pareja: Buscan una relación que les permita crecer y alcanzar el éxito. Son protectores y dedicados, pero pueden ser exigentes y esperar mucho de su pareja. Valoran la estabilidad y el logro.`,
        9: `Número 9
Características: Humanitarismo, compasión, generosidad, idealismo.
En pareja: Son generosos y buscan una relación basada en el amor y la compasión. Son idealistas y pueden tener altos estándares para sí mismos y para su pareja. Valoran la conexión emocional y el apoyo mutuo.`,
        11: `Número 11 (Maestro)
Características: Intuición, iluminación, inspiración, idealismo.
En pareja: Buscan una conexión profunda y espiritual. Son intuitivos y pueden ser muy inspiradores para su pareja. Necesitan una relación que les permita crecer y explorar su espiritualidad.`,
        22: `Número 22 (Maestro)
Características: Visión, practicidad, ambición, construcción.
En pareja: Buscan construir una relación sólida y significativa. Son prácticos y ambiciosos, trabajando hacia objetivos comunes con su pareja. Valoran la estabilidad y la estructura en la relación.`,
        33: `Número 33 (Maestro)
Características: Compasión, servicio, enseñanza, amor incondicional.
En pareja: Son extremadamente amorosos y buscan una relación basada en el servicio y la compasión. Son protectores y se preocupan profundamente por su pareja. Valoran la conexión emocional y espiritual.`
    };
    return meanings[num] || "Número no válido";
}
