
import { useState } from 'react';
import { Heart, Star, CheckCircle, MessageCircle, Instagram, ArrowRight, Users, Trophy, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const whatsappLink = "https://wa.me/5513996631392";
  const instagramLink = "https://instagram.com/nutrifranbatista";

  const specialties = [
    {
      id: 'emagrecimento',
      title: 'Emagrecimento Saudável',
      icon: <Heart className="w-6 h-6" />,
      description: 'Programa personalizado para perda de peso de forma sustentável, sem dietas restritivas. Focamos na mudança de hábitos alimentares e na criação de uma relação saudável com a comida.',
      benefits: ['Perda de peso gradual e sustentável', 'Sem efeito sanfona', 'Melhora da autoestima', 'Hábitos alimentares saudáveis']
    },
    {
      id: 'massa',
      title: 'Ganho de Massa Muscular',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Estratégias nutricionais específicas para hipertrofia muscular, combinando alimentação adequada com seus treinos para máximos resultados.',
      benefits: ['Aumento da massa magra', 'Melhora da performance', 'Recuperação otimizada', 'Definição muscular']
    },
    {
      id: 'esportiva',
      title: 'Nutrição Esportiva Funcional',
      icon: <Star className="w-6 h-6" />,
      description: 'Nutrição especializada para atletas e praticantes de atividade física, otimizando performance, recuperação e prevenção de lesões.',
      benefits: ['Melhora da performance', 'Recuperação acelerada', 'Prevenção de lesões', 'Energia consistente']
    },
    {
      id: 'reeducacao',
      title: 'Reeducação Alimentar',
      icon: <CheckCircle className="w-6 h-6" />,
      description: 'Transformação completa da sua relação com a alimentação, desenvolvendo uma mentalidade saudável e sustentável para toda a vida.',
      benefits: ['Relação saudável com comida', 'Autoconhecimento alimentar', 'Flexibilidade nas escolhas', 'Bem-estar integral']
    }
  ];

  const tips = [
    {
      title: 'Como montar um prato equilibrado',
      description: 'A regra dos 50-25-25 para uma refeição completa',
      image: '/lovable-uploads/c973bbd6-d520-4842-ba21-54834b9f7a77.png'
    },
    {
      title: 'Mitos sobre carboidrato',
      description: 'Descubra a verdade sobre esse macronutriente essencial',
      image: '/lovable-uploads/c6615e86-b954-4f78-8fd1-eda8867a71e5.png'
    },
    {
      title: 'A importância da proteína',
      description: 'Por que incluir proteína em todas as refeições',
      image: '/lovable-uploads/a48297bd-5b37-4a99-962b-a25e6cb671ec.png'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      text: 'Com a Fran consegui emagrecer 12kg de forma saudável e sem sofrimento. O acompanhamento é incrível!',
      result: '12kg em 4 meses'
    },
    {
      name: 'João Silva',
      text: 'Nunca pensei que conseguiria ganhar massa muscular tão rápido. As orientações da Fran são precisas.',
      result: '8kg de massa magra'
    },
    {
      name: 'Ana Costa',
      text: 'Mudou completamente minha relação com a comida. Hoje tenho uma alimentação equilibrada e prazerosa.',
      result: 'Reeducação alimentar'
    }
  ];

  const quizQuestions = [
    {
      question: 'Qual é o seu principal objetivo?',
      options: ['Emagrecer', 'Ganhar massa muscular', 'Melhorar performance esportiva', 'Reeducação alimentar']
    },
    {
      question: 'Quantas vezes por semana você treina?',
      options: ['Não treino', '1-2 vezes', '3-4 vezes', '5+ vezes']
    },
    {
      question: 'Como você descreveria seus hábitos alimentares atuais?',
      options: ['Muito desorganizados', 'Razoáveis', 'Bons', 'Excelentes']
    }
  ];

  const handleSpecialtyClick = (specialtyId: string) => {
    setSelectedSpecialty(selectedSpecialty === specialtyId ? null : specialtyId);
  };

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer };
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Quiz completed - you could add logic here to determine recommendation
      console.log('Quiz completed:', newAnswers);
    }
  };

  const getQuizRecommendation = () => {
    if (quizAnswers[0] === 'Emagrecer') return 'Programa de Emagrecimento Saudável';
    if (quizAnswers[0] === 'Ganhar massa muscular') return 'Programa de Ganho de Massa Muscular';
    if (quizAnswers[0] === 'Melhorar performance esportiva') return 'Programa de Nutrição Esportiva';
    return 'Programa de Reeducação Alimentar';
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-nude via-pink-light to-white px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-rose leading-tight">
              Nutrição inteligente,
              <span className="text-rose-burned block">com ciência e empatia</span>
            </h1>
            <p className="text-xl text-gray-rose/80 leading-relaxed max-w-2xl">
              Consultas 100% online com acompanhamento individualizado para você alcançar seus objetivos com leveza e consistência.
            </p>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-rose-burned hover:bg-rose-burned/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero atendimento personalizado
            </Button>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-burned" />
                <span className="text-gray-rose">500+ pacientes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-burned" />
                <span className="text-gray-rose">9 anos de experiência</span>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="/lovable-uploads/c973bbd6-d520-4842-ba21-54834b9f7a77.png" 
                alt="Fran Batista - Nutricionista"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-rose-burned" />
                  <div>
                    <p className="font-semibold text-gray-rose text-sm">CRN 50538</p>
                    <p className="text-xs text-gray-rose/70">Nutricionista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/c6615e86-b954-4f78-8fd1-eda8867a71e5.png" 
                alt="Sobre Fran Batista"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-rose">Quem é Fran Batista</h2>
              <div className="space-y-4 text-gray-rose/80 leading-relaxed">
                <p>
                  Meu nome é Fran Batista, sou nutricionista há 9 anos, com especialização em Nutrição Esportiva Funcional pela VP. Também sou mestre em Ciências da Saúde e aperfeiçoada em Pesquisa e Cirurgia Plástica pela UNIFESP.
                </p>
                <p>
                  Atuo como Personal Diet e pesquisadora, com publicações nacionais e internacionais. Minha missão é oferecer um acompanhamento personalizado, baseado em ciência, acolhimento e resultados reais.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-nude p-4 rounded-2xl">
                  <p className="text-sm text-gray-rose/70">CRN</p>
                  <p className="font-semibold text-gray-rose">50538</p>
                </div>
                <div className="bg-nude p-4 rounded-2xl">
                  <p className="text-sm text-gray-rose/70">Atendimento</p>
                  <p className="font-semibold text-gray-rose">100% online</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => window.open(instagramLink, '_blank')}
                  variant="outline" 
                  className="border-rose-burned text-rose-burned hover:bg-rose-burned hover:text-white"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @nutrifranbatista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-nude">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-rose mb-4">Como posso te ajudar</h2>
            <p className="text-xl text-gray-rose/70">Especialidades desenvolvidas para seus objetivos específicos</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty) => (
              <Card key={specialty.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-pink-light rounded-2xl text-rose-burned group-hover:bg-rose-burned group-hover:text-white transition-colors">
                      {specialty.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-rose">{specialty.title}</h3>
                  </div>
                  <Button 
                    onClick={() => handleSpecialtyClick(specialty.id)}
                    variant="outline" 
                    className="w-full border-rose-burned text-rose-burned hover:bg-rose-burned hover:text-white rounded-full"
                  >
                    Quero saber mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  {selectedSpecialty === specialty.id && (
                    <div className="mt-6 p-6 bg-pink-light rounded-2xl animate-slide-up">
                      <p className="text-gray-rose mb-4">{specialty.description}</p>
                      <div className="space-y-2 mb-6">
                        {specialty.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-rose-burned" />
                            <span className="text-sm text-gray-rose">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        onClick={() => window.open(whatsappLink, '_blank')}
                        className="w-full bg-rose-burned hover:bg-rose-burned/90 text-white rounded-full"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Agendar agora
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-rose mb-4">Dicas de Alimentação</h2>
            <p className="text-xl text-gray-rose/70">Conhecimento que transforma sua relação com a comida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-3xl overflow-hidden hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-rose mb-2">{tip.title}</h3>
                  <p className="text-gray-rose/70 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-light to-nude">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-rose mb-4">Descubra o melhor plano para você</h2>
            <p className="text-xl text-gray-rose/70">Responda algumas perguntas e receba uma recomendação personalizada</p>
          </div>
          
          <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              {quizStep < quizQuestions.length ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-gray-rose/70">Pergunta {quizStep + 1} de {quizQuestions.length}</span>
                    <div className="w-24 h-2 bg-pink-light rounded-full">
                      <div 
                        className="h-full bg-rose-burned rounded-full transition-all duration-300"
                        style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-rose mb-6">
                    {quizQuestions[quizStep].question}
                  </h3>
                  <div className="grid gap-3">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleQuizAnswer(option)}
                        variant="outline"
                        className="p-4 text-left justify-start border-pink-light hover:bg-pink-light hover:border-rose-burned transition-all duration-300 rounded-2xl"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-rose-burned rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-rose">
                    Perfeito! Recomendo o:
                  </h3>
                  <p className="text-xl text-rose-burned font-semibold">
                    {getQuizRecommendation()}
                  </p>
                  <p className="text-gray-rose/70">
                    Baseado nas suas respostas, este é o programa ideal para alcançar seus objetivos.
                  </p>
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="bg-rose-burned hover:bg-rose-burned/90 text-white px-8 py-4 rounded-full shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Começar agora
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-rose mb-4">Resultados e Depoimentos</h2>
            <p className="text-xl text-gray-rose/70">Histórias reais de transformação</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-pink-light to-nude rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-rose-burned fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-rose italic mb-6">"{testimonial.text}"</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-rose">{testimonial.name}</h4>
                    <p className="text-sm text-rose-burned font-medium">{testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-gray-rose to-rose-burned text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/a48297bd-5b37-4a99-962b-a25e6cb671ec.png" 
                  alt="Fran Batista"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-semibold">Fran Batista</h3>
                <p className="text-white/80">CRN 50538</p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Pronta para começar?</h3>
                <p className="text-white/90 leading-relaxed">
                  Consultas 100% online. Atendimento com base científica, empatia e foco nos seus resultados.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-white text-rose-burned hover:bg-white/90 rounded-full px-6 py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={() => window.open(instagramLink, '_blank')}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-burned rounded-full px-6 py-3"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/70 text-center">
                © 2024 Fran Batista - Nutricionista. Todos os direitos reservados.
                <br />
                <span className="text-sm">nutrifranbatista@outlook.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
