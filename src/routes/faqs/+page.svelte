<script lang="ts">
    interface Faq {
        id: number;
        question: string;
        answer: string;
    }

    const faqs: Faq[] = [
        {
            id: 1,
            question: "Will there be prints with the package?",
            answer: "No. We will be delivering high resolution digital images.",
        },
        {
            id: 2,
            question: "What will be the approximate session duration?",
            answer: "Session duration usually varies between 40 minutes to a maximum of 1 hour.",
        },

        {
            id: 4,
            question: "Can we select the pictures for editing?",
            answer: "Yes.",
        },
        {
            id: 5,
            question:
                "Will you cover events like birthday parties, wedding etc.?",
            answer: "No. I don't cover events.",
        },
    ];
</script>

<section class="section-pad">
    <div class="container-narrow">
        <header class="mb-12 text-center">
            <h2 class="heading-display text-5xl text-brand mb-4">
                Frequently Asked Questions
            </h2>
            <p class="text-lg text-content">
                Find answers to common questions about our photography services
            </p>
        </header>

        <div class="space-y-6 mb-12">
            {#each faqs as faq (faq.id)}
                <article
                    class="bg-card p-6 border-l-4 border-brand-soft hover:shadow-lg transition-shadow"
                >
                    <h3 class="text-lg text-brand mb-3">{faq.question}</h3>
                    <p class="text-content leading-relaxed">{faq.answer}</p>
                </article>
            {/each}
        </div>

        <div class="bg-surface p-8 border-2 border-brand-border text-center">
            <h3 class="text-2xl text-brand mb-4">Still Have Questions?</h3>
            <p class="text-content mb-6">
                If you have any other queries, feel free to contact me at
            </p>
            <a
                href="mailto:Jovy.thomas@gmail.com"
                class="text-xl text-brand hover:underline inline-block mb-4"
            >
                Jovy.thomas@gmail.com
            </a>
            <p class="text-sm text-content mt-4">
                Or call/text:
                <a href="tel:629-308-4828" class="text-brand hover:underline"
                    >629-308-4828</a
                >
            </p>
        </div>

        <div class="mt-8 p-6 bg-card border border-brand-border">
            <p class="text-sm text-content text-center leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days (Monday-Friday, 9 AM - 5 PM CT). I look forward to
                hearing from you and discussing how we can capture your special
                moments!
            </p>
        </div>
    </div>
</section>
