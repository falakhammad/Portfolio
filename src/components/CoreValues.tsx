import { Card } from '@/components/ui/card';

const CoreValues = () => {
    return (
        <section id="coreValues" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        
                        <div>
                            {
                                /** To create a space on left side */
                            }
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="bg-card rounded-xl p-6 card-elevated">
                                    <h4 className="text-xl font-semibold mb-4 text-foreground">Core Values</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                            I uphold integrity and accountability in every professional interaction.
                                        </li>
                                        <li className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                           I strive for excellence by delivering high-quality work with consistency and dedication.
                                        </li>
                                        <li className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                           I value clear communication, collaboration, and respect as the foundation of strong teamwork.
                                        </li>
                                        <li className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                           I embrace continuous learning and adaptability to drive growth and innovation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;