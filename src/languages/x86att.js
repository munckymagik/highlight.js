/*
Language: Intel x86 Assembly GAS AT&T
Author: Dan Munckton <munckfish@gmail.com>
Description: x86 assembly language using AT&T and Gnu AS syntax
Category: assembler
*/

function(hljs) {
  return {
    case_insensitive: true,
    lexemes: '[.%]?' + hljs.IDENT_RE,
    keywords: {
      keyword:
        'addl addq andb call calll callq cmp cmpl cmpq imulq jb jbe je jge jmp jne lea leal leaq mov movb movl movq movsbl movslq movzbl pop popl popq push pushl pushq ret retl retq seta sete subq testb xorb xorl',
      built_in:
        // Instruction pointer
        '%ip %eip %rip ' +
        // 8-bit registers
        '%al %ah %bl %bh %cl %ch %dl %dh %sil %dil %bpl %spl %r8b %r9b %r10b %r11b %r12b %r13b %r14b %r15b ' +
        // 16-bit registers
        '%ax %bx %cx %dx %si %di %bp %sp %r8w %r9w %r10w %r11w %r12w %r13w %r14w %r15w ' +
        // 32-bit registers
        '%eax %ebx %ecx %edx %esi %edi %ebp %esp %eip %r8d %r9d %r10d %r11d %r12d %r13d %r14d %r15d ' +
        // 64-bit registers
        '%rax %rbx %rcx %rdx %rsi %rdi %rbp %rsp %r8 %r9 %r10 %r11 %r12 %r13 %r14 %r15 ' +
        // Segment registers
        '%cs %ds %es %fs %gs %ss ' +
        // Floating point stack registers
        '%st %st0 %st1 %st2 %st3 %st4 %st5 %st6 %st7 ' +
        // MMX Registers
        '%mm0 %mm1 %mm2 %mm3 %mm4 %mm5 %mm6 %mm7 ' +
        // SSE registers
        '%xmm0 %xmm1 %xmm2 %xmm3 %xmm4 %xmm5 %xmm6 %xmm7 %xmm8 %xmm9 %xmm10 %xmm11 %xmm12 %xmm13 %xmm14 %xmm15 ' +
        '%xmm16 %xmm17 %xmm18 %xmm19 %xmm20 %xmm21 %xmm22 %xmm23 %xmm24 %xmm25 %xmm26 %xmm27 %xmm28 %xmm29 %xmm30 %xmm31 ' +
        // AVX registers
        '%ymm0  %ymm1 % ymm2 %ymm3 %ymm4 %ymm5 %ymm6 %ymm7 %ymm8 %ymm9 %ymm10 %ymm11 %ymm12 %ymm13 %ymm14 %ymm15 ' +
        '%ymm16 %ymm17 %ymm18 %ymm19 %ymm20 %ymm21 %ymm22 %ymm23 %ymm24 %ymm25 %ymm26 %ymm27 %ymm28 %ymm29 %ymm30 %ymm31 ' +
        // AVX-512F registers
        '%zmm0 %zmm1 % zmm2 %zmm3 %zmm4 %zmm5 %zmm6 %zmm7 %zmm8 %zmm9 %zmm10 %zmm11 %zmm12 z%mm13 %zmm14 %zmm15 ' +
        '%zmm16 %zmm17 %zmm18 %zmm19 %zmm20 %zmm21 %zmm22 %zmm23 %zmm24 %zmm25 %zmm26 %zmm27 %zmm28 %zmm29 %zmm30 %zmm31 ' +
        // AVX-512F mask registers
        '%k0 %k1 %k2 %k3 %k4 %k5 %k6 %k7 ' +
        // Bound (MPX) register
        '%bnd0 %bnd1 %bnd2 %bnd3 %' +
        // Special register
        '%cr0 %cr1 %cr2 %cr3 %cr4 %cr8 %dr0 %dr1 %dr2 %dr3 %dr8 %tr3 %tr4 %tr5 %tr6 %tr7',
      meta:
        '.ascii .asciz .byte .cfi_def_cfa_offset .cfi_def_cfa_register .cfi_endproc .cfi_offset .cfi_startproc .file .globl .loc .long .macosx_version_min .p2align .quad .section .short .str .subsections_via_symbols .text'
    },
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.HASH_COMMENT_MODE,
      {
        className: 'number',
        variants: [
          // Immediate number
          { begin: '\\$?' + hljs.C_NUMBER_RE, relevance: 0 },
        ]
      },
      // Double quote string
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        variants: [
          // Single-quoted string
          { begin: '\'', end: '[^\\\\]\'' },
          // Backquoted string
          { begin: '`', end: '[^\\\\]`' }
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
          // Global label and local label
          { begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)' },
          // Macro-local label
          { begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:' }
        ],
        relevance: 0
      }
    ]
  };
}
